import { Suspense } from "react";
import CreateCardPage from "./CreateCardClient";

export default function Page() {
    return (
        <Suspense fallback={null}>
            <CreateCardPage></CreateCardPage>
        </Suspense>
    )
}