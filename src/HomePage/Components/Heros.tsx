import { Link } from "react-router-dom"

export const Heros = () => {
    return (
        
        <div className="px-4 pt-5 my-5 text-center justify-content-center h-100">
            <h1 className="display-4 fw-bold text-body-emphasis">Welcome</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    Lorem ipsum dolor sit amet. At dolore repellat qui laboriosam vitae eos
                    recusandae beatae sit culpa architecto qui odio enim. Est officiis amet hic assumenda
                    voluptas qui quos ipsum sit facilis internos et nemo recusandae ut accusamus suscipit.
                    Et adipisci sapiente sed voluptatem dolorem non amet amet. orem aut atque nobis ut quam labore?

                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <Link type="button" className="btn btn-dark btn-lg px-4 me-sm-3" to="/search">
                        Get started
                    </Link>


                </div>
            </div>
        </div>
    );

   
}