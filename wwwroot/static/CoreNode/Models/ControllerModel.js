/**/
export default class CotrollerModel{

    static ControllerContext;

    /**/
    constructor(ReRender = () => {}, layoutBuilder = (LayoutParams = {}) => {}, OnErrorCallBack = ErrorContent => {}, Params = {}){

        /**/
        this.ReRender = ReRender;

        /**/
        this.layoutBuilder = layoutBuilder;

        /**/
        this.OnErrorCallBack = OnErrorCallBack;

        /**/
        this.Params = Params;
    }

    async Init(){

    }

    /**/
    async Body(){
        
    }

    /**/
    async Render(){

        /* Renders the body  of controller */
        let AppContent = document.getElementById("app");
        AppContent.innerHTML = "";
        let BodyWidget = await this.Body();
        AppContent.appendChild(await BodyWidget.Build());
    }
}