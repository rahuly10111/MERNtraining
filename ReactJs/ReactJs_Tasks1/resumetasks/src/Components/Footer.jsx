import React from 'react'
function footer() {
    return (
        <>
            <footer className="text-center text-lg-start bg-secondary">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span><b>Get connected with us on social networks:</b> </span>
                        <span><i className="bi bi-instagram footericon" style={{ fontSize: "1.5rem" }}></i></span>
                        <span><i className="bi bi-facebook  footericon" style={{ fontSize: "1.5rem" }}></i></span>
                        <span><i className="bi bi-github  footericon" style={{ fontSize: "1.5rem" }}></i></span>
                        <span><i className="bi bi-youtube  footericon" style={{ fontSize: "1.5rem" }}></i></span>

                    </div>
                </section>
            </footer>
        </>
    )
}

export default footer;
