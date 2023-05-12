import { Redirect } from "expo-router";

// since using <Stack />, need to have named route for "homepage". when URL is '/', redirect to '/browse' aka home page.
export default function Index() {
    return <Redirect href="/browse" />;
}