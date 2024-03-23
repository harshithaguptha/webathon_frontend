import React from 'react';
import Nav from './Nav';

function Help() {
    return (
        <div className='flex justify-centre mr-40'>

            
            <Nav />
            <div className="flex justify-center hover:scale-105 duration-300 ml-60 mr-20 pt-40 bg-amber-50-fill  pb-60 pr-10">
                <div className=" p-6 border-2 border-gray-300 rounded-lg bg-amber-700  hover:shadow-lg shadow-md">
                    <h1 className="text-lg font-bold mb-4 text-white">FAQ's by owners</h1>
                    <div className="border border-dashed border-gray-100 bg-white p-4 rounded-lg">
                        <ol>
                            <li >How can I find a trusted pet sitter in my area?</li>
                            <li >How are pet sitters verified on the platform?</li>
                            <li  >How do I book a pet sitting service?</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcjQ7mnWHMi2xBnXIo-ZHb00XQ_1fDNf_-IQ&usqp=CAU" alt="" className=" w-100 h-100 object-cover mt-20 mb-5 pl-10" />
            
            <div className="flex justify-center hover:scale-105 duration-300 pt-20 bg-amber-50-fill ">
                
                <div className=" p-6 border-2 border-gray-300 rounded-lg transform ranslate-2 bg-amber-700  hover:shadow-lg shadow-md">
                    <h1 className="text-lg font-bold mb-4 text-white ">Ask your questions</h1>
                    <div className="border border-dashed border-gray-100 p-4 rounded-lg bg-white">
                    <input className="input input-solid bg-white" placeholder="Questions" />
                    </div>
                    <button className="btn bg-slate-600 text-white mt-10 ml-40 hover:scale-105 duration-300 hover:bg-slate-500">Submit</button>
                </div>
            </div>
            </div>
            
            <div className="flex justify-center hover:scale-105 duration-300 ml-20 pt-40 bg-amber-50-fill pb-60">
                <div className=" p-6 border-2 border-gray-300 rounded-lg bg-amber-700 hover:shadow-lg shadow-md">
                    <h1 className="text-lg font-bold mb-4 text-white ">FAQ's by sitters</h1>
                    <div className="border border-dashed border-gray-100 p-4 rounded-lg bg-white text-black">
                        <ol>
                            <li >How can I become a verified pet sitter on the platform?</li>
                            <li >How do I set my pet sitting rates?</li>
                            <li >How can I update my availability for pet sitting services?</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Help;