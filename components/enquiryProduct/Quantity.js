import React from "react";
import { Radio, Input } from "antd";

const Quantity = ({
    quantity,
    minimumQuantity,
    customQuantity,
    disableCustomQuantityInput,
    onChangeQuantity,
    onChangeCustomQuantity,
    onBlurCustomQuantity,
}) => {
    return (
        <>
            <Radio.Group onChange={(e) => onChangeQuantity(e, minimumQuantity)} value={quantity}>
                {50 >= minimumQuantity
                    ? <Radio value={50}>50</Radio>
                    : <Radio disabled={true} value={50}>50</Radio>
                }
                {100 >= minimumQuantity
                    ? <Radio value={100}>100</Radio>
                    : <Radio disabled={true} value={100}>100</Radio>
                }
                {250 >= minimumQuantity
                    ? <Radio value={250}>250</Radio>
                    : <Radio disabled={true} value={250}>250</Radio>
                }
                {500 >= minimumQuantity
                    ? <Radio value={500}>500</Radio>
                    : <Radio disabled={true} value={500}>500</Radio>
                }
                {1000 >= minimumQuantity
                    ? <Radio value={1000}>1000</Radio>
                    : <Radio disabled={true} value={1000}>1000</Radio>
                }
                {2000 >= minimumQuantity
                    ? <Radio value={2000}>2000</Radio>
                    : <Radio disabled={true} value={2000}>2000</Radio>
                }
                <Radio value={"custom"}>Custom</Radio>
                <Input
                    type="number"
                    min={minimumQuantity ? minimumQuantity : "50"}
                    placeholder={minimumQuantity ? minimumQuantity : "50"}
                    className="form_input"
                    disabled={disableCustomQuantityInput}
                    value={customQuantity}
                    onChange={(e) => {
                        onChangeCustomQuantity(e)
                    }}
                    onBlur={(e) => {
                        onBlurCustomQuantity(e, minimumQuantity)
                    }}
                />
            </Radio.Group>
        </>
    );
}

export default Quantity;