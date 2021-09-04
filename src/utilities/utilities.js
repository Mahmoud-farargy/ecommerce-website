import toast from "react-hot-toast";

const toastify = ({msg, type}) => {
    const config = {
        position: "bottom-center",
        duration: 2000
    }
    if(msg){
        switch(type) {
            case "success":
                toast.success(msg, config );
            break;
            case "error":
                toast.error(msg, config);
            break;
            case "loading":
            toast.loading(msg, config);
            break;
            case "warning":
            toast(msg, {
                ...config,
                style: {
                backgroundColor: '#f7d475',
              }});
            break;
            case "info":
            toast(msg, {
                ...config,
                style: {
                backgroundColor: '#75a7f1',
                color: "#fff"
              }});
            break;
            default:
                toast(msg, config);
        }
    }
}
const trimText = (txt, limit) => txt ? (`${txt.split("").length > limit ? txt.split("").slice(0,limit).join("")+"..." : txt}`) : "";

export {
    toastify,
    trimText
}