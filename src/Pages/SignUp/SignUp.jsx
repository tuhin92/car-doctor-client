import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
const SignUp = () => {
    const handleSignUp = event =>{
        event.preventDefault();
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm border-2  bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-4xl font-semibold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#FF3811] text-white text-lg font-semibold" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center my-4 text-lg  text-gray-600'>Already have an account? <Link className='text-[#FF3811] font-semiboldbold' to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;