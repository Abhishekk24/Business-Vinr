import { MailIcon, PhoneCall, HomeIcon } from 'lucide-react';

function Contact() {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              Say Hello
            </div>
            <h1 className='h1 max-w-md mb-8'>Let's Connect</h1>
            <p className='subtitle max-w-[400px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur dolorum explicabo voluptate, libero ex fugiat, similique odio perferendis voluptates architecto velit eos delectus ipsam beatae vel modi magni. Reiciendis.
            </p>
          </div>
          <div>
            {/* illustration */}
            <div className='hidden xl:flex w-full bg-contain bg-top bg-no-repeat'>
              <iframe
                className="w-full h-[500px] xl:w-[700px] xl:h-[500px] rounded-md shadow-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15195.890370129258!2d74.3955550966623!3d17.79298516206121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3b80000ffabbb%3A0x8805ef9216d347dd!2sKulakjai%2C%20Maharashtra%20415503!5e0!3m2!1sen!2sin!4v1701174459382!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-8 py-12' >
          <div>
            {/* Contact information */}
            <div className='mb-6'>
              <h2 className='text-2xl font-semibold mb-4'>Contact Information</h2>
              <div className='flex items-center mb-2'>
                <MailIcon className='w-6 h-6 mr-2' />
                <span>Email: example@example.com</span>
              </div>
              <div className='flex items-center mb-2'>
                <PhoneCall className='w-6 h-6 mr-2' />
                <span>Phone: +123 456 7890</span>
              </div>
              <div className='flex items-center'>
                <HomeIcon className='w-6 h-6 mr-2' />
                <span>Address: 123 Street, City, Country</span>
              </div>
            </div>
          </div>
          <div>
            {/* Contact form */}
            <form className='max-w-md mb-24 xl:mb-48'>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                <input type='text' id='name' name='name' className='mt-1 p-2 w-full border rounded-md' />
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                <input type='email' id='email' name='email' className='mt-1 p-2 w-full border rounded-md' />
              </div>
              <div className='mb-4'>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Message</label>
                <textarea id='message' name='message' rows='4' className='mt-1 p-2 w-full border rounded-md'></textarea>
              </div>
              <button type='submit' className='bg-primary text-white p-2 rounded-md'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
