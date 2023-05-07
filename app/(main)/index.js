import { Redirect } from "expo-router";

// since using <Stack />, need to have named route for home. when URL is '/', redirect to '/home' aka home page.
export default function Index() {
    return <Redirect href="/browse" />;
}