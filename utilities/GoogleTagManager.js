import { WindowsFilled } from '@ant-design/icons';
import TagManager from 'react-gtm-module';

export const pushProductItemToGTM = (data) => {
    const currentSku = data.skus.filter(s => s.id === data.id)[0];
    const productItemData = {
        dataLayer: {
            'event': 'productClick',
            'ecommerce': {
                'detail': {
                    'actionField': { 'list': 'Product Details' },
                    'products': [{
                        'id': data.key,
                        'title': data.name,
                        'description': data.description,
                        'link': window.location.href,
                        'image_link': currentSku.view_images[0] || currentSku.life_style_image,
                        'price': data.from_price,
                        'availability': "in stock",
                        'brand': data.brand,
                        'condition': "new",
                        'color': currentSku.color_name,
                        'size': currentSku.size_code,
                        'age_group': 'adult',
                        'custom_labels': data.tags,
                        'Item_group_id': data.vendor_product_id,
                        'name': data.name,
                        'category': currentSku.category1,
                        'variant': currentSku.color_name
                    }]
                }
            }
        },
    }
    TagManager.dataLayer(productItemData);
};

export const pushCartItemToGTM = (data) => {
    const cartItemData = {
        dataLayer: {
            'event': 'addToCart',
            'ecommerce': {
                'currencyCode': 'AUD',
                'add': {
                    'products': [{
                        'name': data.name.replaceAll('+', ' '),
                        'title': data.name.replaceAll('+', ' '),
                        'id': data.id,
                        'price': data.line_total,
                        'variant': data.color,
                        'quantity': Number(data.qty)
                    }]
                }
            }
        },
    }
    TagManager.dataLayer(cartItemData);
};

export const pushCheckedOutItemsToGTM = (data) => {
    const purchasedItemsData = {
        dataLayer: {
            'ecommerce': {
                'purchase': {
                    'actionField': {
                        // Transaction ID. Required for purchases and refunds
                        'id': data.invoice_id,
                        'affiliation': 'Online Store',
                        // Total transaction value (incl. tax and shipping)
                        'revenue': data.total_price,
                        'tax': data.tax,
                        'shipping': data.freight_price,
                        'coupon': ''
                    },
                    // List of productFieldObjects
                    'products': buildGTMProductsFromCheckoutResponse(data)
                }
            }
        },
    }
    TagManager.dataLayer(purchasedItemsData);
};

const buildGTMProductsFromCheckoutResponse = (data) => {
    const gtmProducts = [];
    if (data.external_data) {
        const chckoutresExtdataObj = JSON.parse(data.external_data);
        if (chckoutresExtdataObj.order_lines && chckoutresExtdataObj.order_lines.length > 0) {
            chckoutresExtdataObj.order_lines.map(ol => {
                gtmProducts.push({
                    'name': ol.product_name,     // Name or ID is required.
                    'id': ol.id,
                    'price': ol.total_price,
                    'brand': ol.product_supplier_name,
                    'category': '',
                    'variant': ol.product_color && ol.product_color.name,
                    'quantity': ol.qty,
                });
            });
        }
    }
    return gtmProducts;
};