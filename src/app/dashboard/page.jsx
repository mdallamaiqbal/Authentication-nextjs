
import { auth } from "@/lib/auth";

import { headers } from "next/headers";
import { redirect } from "next/navigation";


const Dashboard =async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;
    if(!user){
        redirect('/auth/signin')
        return <div>Please sign in to access dashboard</div>
    }

    return (
        <div>
            <h2>welcome to dashboard</h2>
        </div>
    );
};

export default Dashboard;