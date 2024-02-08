import toast from "react-hot-toast";

export function handleQuoteFetch(promise:Promise<any>) {
    toast.promise(promise, {
        loading: "Loading",
        success:(data) => {
            if (data.status === 'error') {
                throw new Error("Oops")
            }
            return "Success!"
        },
        error: "Error!"
    })

}