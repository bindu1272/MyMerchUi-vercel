"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { connect, useDispatch } from "react-redux";
import { notification, Spin } from "antd";
import Navigator from "@/components/Admin/Navigator";
import SettingsForm from "@/components/Admin/SettingsForm";
import { getUser } from "@/selectors/authSelector";
import { saveSettingsRequest, fetchSettingsRequest } from "@/actions/settingsActions";
import GoogleSetup, { trackPageViewInGoogle } from "@/utilities/GoogleSetUp";

const Settings = ({
    user,
}:any) => {
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
                (data:any) => {
                    setSettings(data);
                    setLoading(false);
                },
                (error:any) => {
                    setLoading(false);
                    notification.error({
                        message: "Something went wrong while fetching settings",
                        placement: "bottomRight",
                        // bottom: 400,
                    });
                }
            )
        );
    }, []);

    const onSaveSettings = (values:any) => {
        setLoading(true);
        dispatch(
            saveSettingsRequest(
                values,
                (data:any) => {
                    setSettings(data)
                    setLoading(false);
                    notification.success({
                        message: "Settings saved successfully",
                        placement: "bottomRight",
                        // bottom: 400,
                    });
                },
                (error:any) => {
                    setLoading(false);
                    notification.error({
                        message: "Something went wrong while saving settings",
                        placement: "bottomRight",
                        // bottom: 400,
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

function mapStateToProps(state:any) {
    return {
        user: getUser(state),
    };
}

export default connect(mapStateToProps, {})(Settings);
