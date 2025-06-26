import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import MainLayout from "./Layouts/MainLayout";

const appName = import.meta.env.VITE_APP_NAME || "Upgradein";

createInertiaApp({
    progress: false,
    title: (title) => `${title}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ).then((module) => {
            const Page = module.default;
            // Gunakan MainLayout sebagai default layout
            Page.layout =
                Page.layout || ((page) => <MainLayout>{page}</MainLayout>);
            return Page;
        }),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
});
