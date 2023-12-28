import React from 'react'

const MyModal = ({ visible, onClose }) => {

    if (!visible) return null;
    return (
        <div className=' fixed inset-0 backdrop-blur-sm bg-black bg-opacity-25 flex justify-center items-center'>
            <div className='bg-white w-11/12 h-5/6 rounded-lg '>

                <header className='flex justify-between w-full h-14 border-b-2 '>
                    <div>
                        <p className='text-lg  text-gray-700 mt-3 ml-4'>Create a New Workspace</p>
                    </div>

                    <div onClick={onClose} className='cursor-pointer bg-gray-200 border rounded-md h-7 w-7 mr-3 mt-3.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" ml-1 mt-1 w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </div>

                </header>

                <div className='w-full'>
                    <p className='text-md font-bold  text-gray-600 mt-3 ml-4'>Workspace Details</p>
                    <p className='text-gray-500 ml-4 text-xs'>All fields are mandatory. Please fill out all fields before submitting the form.</p>
                    <p className='text-sm font-bold  text-gray-600 mt-0.5 ml-4'>Space Name</p>
                    <input type="text" id="large-input" placeholder='Enter Space Name' class=" mt-2 block text-sm h-11 w-2/5 ml-3 p-3 text-gray-700 border border-gray-400 rounded-lg placeholder-gray-400 bg-gray-50  " />

                    <div class="flex items-center mt-1 mb-0">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" class=" ml-3 w-5 h-5 text-sm text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500  " />
                        <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-700 ">Public to My Workspace</label>
                        <p id="helper-radio-text" class="text-xs font-normal text-gray-500 mt-10 -ml-36 ">Spaces can be shared with the work network. You can assign members to the tasks after creating a Space.</p>

                    </div>
                    <div class="flex items-center">
                        <input checked id="default-radio-2" type="radio" value="" name="default-radio" class=" ml-3 w-5 h-5 text-sm text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500   " />
                        <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-700 ">Private to My Workspace</label>
                        <p id="helper-radio-text" class="text-xs font-normal text-gray-500 mt-10 -ml-36 ">Spaces are exclusively designated for user work, ensuring privacy and focus. You can assign tasks to yourself only after creating Spaces.</p>

                    </div>
                </div>

                    <footer className='bg-gray-200 w-full h-16 mt-56 flex'>

                    <button onClick={onClose} type="button" class=" w-32 h-10 focus:outline-none text-teal-700 bg-white hover:bg-gray-100    rounded-lg text-sm px-1 py-1 ml-96 my-3">Cancel</button>
                    <button onClick={onClose} type="button" class=" w-44 h-10 focus:outline-none text-white bg-teal-700 hover:bg-teal-800    rounded-lg text-sm px-1 py-1 ml-3 my-3">Create Workspace</button>

                    </footer>

            </div>

        </div>
    )
}

export default MyModal