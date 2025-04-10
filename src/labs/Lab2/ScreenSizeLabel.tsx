export default function ScreenSizeLabel() {
    return(
        <div id="wd-screen-size-label">
            <div className="d-block d-sm-none">
                XS - Extra Small (&lt;576px)
            </div>
            <div className="d-sm-block d-none d-md-none">
                S- Small (&lt;576px)
            </div>
            <div className="d-m-block d-none d-lg-none">
                M - Medium (&lt;576px)
            </div>
            <div className="d-lg-block d-none d-xl-none">
                L - Large (&lt;576px)
            </div>
            <div className="d-xl-block d-none d-xxl-none">
                XL - Extra Large (&lt;576px)
            </div>
            <div className="d-block d-xxl-block">
                XXL - Extra Extra Large (&lt;576px)
            </div>
        </div>
    )
}