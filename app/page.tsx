import { Suspense } from "react";
import MainPage from "./main";
import { Metadata } from "next";


export default function Page() {
    return (
        <Suspense fallback={null}>
            <MainPage></MainPage>
        </Suspense>
    )
}