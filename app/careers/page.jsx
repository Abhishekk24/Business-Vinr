import { Code, Cpu, HardDrive, LibraryBig } from 'lucide-react';

function Careers() {
    return (
        <section>
            <div className='container mx-auto'>
                <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
                    <div className='flex flex-col justify-center'>
                        <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
                            <span className='w-[30px] h-[2px] bg-primary'></span>
                            Explore Careers
                        </div>
                        <h1 className='h1 max-w-md mb-8'>Join Our Team at Vinr Enterprises</h1>
                        <p className='subtitle max-w-[400px]'>
                            At Vinr Enterprises, we are always on the lookout for passionate and talented individuals to join our dynamic team. Explore exciting career opportunities across various domains and be a part of our innovative network and solutions firm.
                        </p>
                    </div>
                    <div>
                        {/* illustration */}
                        <div className='hidden xl:flex w-full bg-contain bg-top bg-no-repeat'>
                            {/* Replace the Google Maps iframe with an illustration related to careers if needed */}
                            <img
                                className="w-full h-[500px] xl:w-[700px] xl:h-[500px] rounded-md shadow-md"
                                src="/career.jpg"
                                alt="Careers Illustration"
                            />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-8 py-12'>
                    <div>
                        {/* Career Information */}
                        <div className='mb-6'>
                            <h2 className='text-2xl font-semibold mb-4'>Available Positions</h2>
                            <div className='flex items-center mb-2'>
                                <Cpu size={20} className='mr-2' />
                                <span>Technical Specialist</span>
                            </div>
                            <div className='flex items-center mb-2'>
                                <LibraryBig size={20} className='mr-2' />
                                <span>Accountant</span>
                            </div>
                            <div className='flex items-center mb-2'>
                                <Cpu size={20} className='mr-2' />
                                <span>Developer</span>
                            </div>
                            <div className='flex items-center'>
                                <Code size={20} className='mr-2' />
                                <span>Hardware Engineer</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* Application Form */}
                        <form className='max-w-md mb-24 xl:mb-48'>
                            <div className='mb-4'>
                                <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Your Name</label>
                                <input type='text' id='name' name='name' className='mt-1 p-2 w-full border rounded-md' />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Your Email</label>
                                <input type='email' id='email' name='email' className='mt-1 p-2 w-full border rounded-md' />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='position' className='block text-sm font-medium text-gray-700'>Position of Interest</label>
                                <select id='position' name='position' className='mt-1 p-2 w-full border rounded-md'>
                                    <option value='technical'>Technical Specialist</option>
                                    <option value='accountant'>Accountant</option>
                                    <option value='developer'>Developer</option>
                                    <option value='hardware'>Hardware Engineer</option>
                                </select>
                            </div>
                            <button type='submit' className='bg-primary text-white p-2 rounded-md mr-2'>Apply Now</button>
                            <label htmlFor="resume" className="bg-primary text-white p-2 rounded-md cursor-pointer">
                                Upload Resume
                                <input type="file" id="resume" name="resume" className="hidden" />
                            </label>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Careers;
