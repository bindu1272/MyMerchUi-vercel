import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { connect, useDispatch } from "react-redux";
import { notification, Spin } from "antd";
import SettingsForm from "./SettingsForm";
import Navigator from "./Navigator";
import { getUser } from "../../selectors/authSelector";
import { saveSettingsRequest, fetchSettingsRequest } from "../../actions/settingsActions";
import GoogleSetup, { trackPageViewInGoogle } from "../../utilities/GoogleSetUp";

const Settings = ({
    user,
}) => {
    const dispatch = useDispatch();
    const history = useRouter();
    const [loading, setLoading] = useState(true);
    const [settings, setSettings] = useState({});

    useEffect(() => {
        trackPageViewInGoogle();
    }, [])

    useEffect(() => {
        if (!user || !user.roles.includes("Admin")) {
            history.push("/");
        }
    }, []);

    useEffect(() => {
        setLoading(true);
        dispatch(
            fetchSettingsRequest(
                (data) => {
                    setSettings(data);
                    setLoading(false);
                },
                (error) => {
                    setLoading(false);
                    notification.error({
                        message: "Something went wrong while fetching settings",
                        placement: "bottomRight",
                        bottom: 400,
                    });
                }
            )
        );
    }, []);

    const onSaveSettings = (values) => {
        setLoading(true);
        dispatch(
            saveSettingsRequest(
                values,
                (data) => {
                    setSettings(data)
                    setLoading(false);
                    notification.success({
                        message: "Settings saved successfully",
                        placement: "bottomRight",
                        bottom: 400,
                    });
                },
                (error) => {
                    setLoading(false);
                    notification.error({
                        message: "Something went wrong while saving settings",
                        placement: "bottomRight",
                        bottom: 400,
                    });
                }
            )
        );
    };

    return (
        loading ? (
            <Spin />
        ) : (
            <>
                <GoogleSetup
                    title={"Admin - Settings"}
                    description={""}
                />
                <Navigator active={"settings"} />
                <SettingsForm
                    settings={settings}
                    onSave={onSaveSettings}
                />
            </>
        )
    );
};

function mapStateToProps(state) {
    return {
        user: getUser(state),
    };
}

export default connect(mapStateToProps, {})(Settings);
