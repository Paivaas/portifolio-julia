
import { useTranslation } from 'react-i18next';

export default function ExperienceTimeline() {
  const { t } = useTranslation();
  return (
    <section className='flex flex-col gap-6'>

        <div className="grid gap-x-4 grid-cols-[32px_550px]">
            <div></div>
            <p className='text-sm'>{t('line-up.1.data')}</p>
            <p className='bg-black text-white w-8 h-8 rounded-4xl flex justify-center items-center'>1</p>
            <h1 className='font-semibold text-lg'>{t('line-up.1.title')}</h1>
            <div className="flex justify-center items-center"><span className='w-1 h-full mt-10 bg-zinc-300 rounded-2xl'></span></div>
            <div> <span className='text-zinc-500'>{t('line-up.1.location')}</span> <p>{t('line-up.1.description')}</p></div>
        </div>

        <div className="grid gap-x-4 grid-cols-[32px_550px]">
            <div></div>
            <p className='text-sm'>{t('line-up.2.data')}</p>
            <p className='bg-black text-white w-8 h-8 rounded-4xl flex justify-center items-center'>2</p>
            <h1 className='font-semibold text-lg'>{t('line-up.2.title')}</h1>
            <div className="flex justify-center items-center"><span className='w-1 h-full mt-10 bg-zinc-300 rounded-2xl'></span></div>
            <div> <span className='text-zinc-500'>{t('line-up.2.location')}</span> <p>{t('line-up.2.description')}</p></div>
        </div>

        <div className="grid gap-x-4 grid-cols-[32px_550px]">
            <div></div>
            <p className='text-sm'>{t('line-up.3.data')}</p>
            <p className='bg-[#1976D2] text-white w-8 h-8 rounded-4xl flex justify-center items-center'>3</p>
            <h1 className='font-semibold text-lg'>{t('line-up.3.title')}</h1>
            <div className="flex justify-center items-center"><span className='w-1 h-full mt-10 bg-zinc-300 rounded-2xl'></span></div>
            <div> 
                <span className='text-zinc-500'>{t('line-up.3.location')}</span> 
                <p>{t('line-up.3.description')}</p>
                
                <div  className='flex flex-col gap-6 p-4'>

                    <div className="grid gap-x-4 grid-cols-[32px_550px]">
                        <div></div>
                        <p className='text-sm'>{t('line-up.4.data')}</p>
                        <p className='bg-[#1976D2] text-white w-8 h-8 rounded-4xl flex justify-center items-center'>3</p>
                        <h1 className='font-semibold text-lg'>{t('line-up.4.title')}</h1>
                        <div className="flex justify-center items-center"><span className='w-1 h-full mt-10 bg-zinc-300 rounded-2xl'></span></div>
                        <div> <span className='text-zinc-500'>{t('line-up.4.location')}</span> <p>{t('line-up.4.description')}</p></div>
                     </div>
                    <div className="grid gap-x-4 grid-cols-[32px_550px] ">
                        <div></div>
                        <p className='text-sm'>{t('line-up.4.data')}</p>
                        <p className='bg-[#1976D2] text-white w-8 h-8 rounded-4xl flex justify-center items-center'>3</p>
                        <h1 className='font-semibold text-lg'>{t('line-up.4.title')}</h1>
                        <div className="flex justify-center items-center">  </div>
                        <div> <span className='text-zinc-500'>{t('line-up.4.location')}</span> <p>{t('line-up.4.description')}</p></div>
                    </div>
                    
                </div>
            
            </div>
        </div>

        <div class="grid gap-x-4 grid-cols-[32px_550px]">
            <div></div>
            <p className='text-sm'>{t('line-up.4.data')}</p>
            <p className='bg-[#34A853] text-white w-8 h-8 rounded-4xl flex justify-center items-center'>4</p>
            <h1 className='font-semibold text-lg'>{t('line-up.4.title')}</h1>
            <div class="flex justify-center items-center"><span className='w-1 h-full mt-10 bg-zinc-300 rounded-2xl'></span></div>
            <div> <span className='text-zinc-500'>{t('line-up.4.location')}</span> <p>{t('line-up.4.description')}</p>
            <div  className='flex flex-col gap-6 p-4'>

                    <div className="grid gap-x-4 grid-cols-[32px_550px]">
                        <div></div>
                        <p className='text-sm'>{t('line-up.4.data')}</p>
                        <p className='bg-[#34A853] text-white w-8 h-8 rounded-4xl flex justify-center items-center'>3</p>
                        <h1 className='font-semibold text-lg'>{t('line-up.4.title')}</h1>
                        <div className="flex justify-center items-center"><span className='w-1 h-full mt-10 bg-zinc-300 rounded-2xl'></span></div>
                        <div> <span className='text-zinc-500'>{t('line-up.4.location')}</span> <p>{t('line-up.4.description')}</p></div>
                     </div>
                    <div className="grid gap-x-4 grid-cols-[32px_550px] ">
                        <div></div>
                        <p className='text-sm'>{t('line-up.4.data')}</p>
                        <p className='bg-[#34A853] text-white w-8 h-8 rounded-4xl flex justify-center items-center'>3</p>
                        <h1 className='font-semibold text-lg'>{t('line-up.4.title')}</h1>
                        <div className="flex justify-center items-center">  </div>
                        <div> <span className='text-zinc-500'>{t('line-up.4.location')}</span> <p>{t('line-up.4.description')}</p></div>
                    </div>
                    
                </div>
            </div>
        </div>

         <div class="grid gap-x-4 grid-cols-[32px_550px]">
            <div></div>
            <p className='text-sm'>{t('line-up.2.data')}</p>
            <p className='bg-black text-white w-8 h-8 rounded-4xl flex justify-center items-center'>2</p>
            <h1 className='font-semibold text-lg'>{t('line-up.2.title')}</h1>
            <div className="flex justify-center items-center"></div>
            <div> <span className='text-zinc-500'>{t('line-up.2.location')}</span> <p>{t('line-up.2.description')}</p></div>
        </div>

    </section>
    
  );
}