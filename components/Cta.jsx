import { Button } from './ui/button';
import Link from 'next/link';

const Cta = () => {
  return (
    <section className='py-20 bg-gray-100 dark:bg-gray-900'>
      <div className='container mx-auto max-w-md'>
        <div className='flex flex-col items-center'>
          <h2 className='text-4xl font-bold max-w-2xl text-center mb-6 text-gray-800 dark:text-white'>
            Elevate Your Business with Vinr Enterprises
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-400 mb-8 text-center'>
            Trusted solutions for your business growth and success.
          </p>
          <Link href='/contact'>
            <Button className='bg-primary hover:bg-primary-dark text-white'>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
