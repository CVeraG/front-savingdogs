import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';

export default function Footer(){
    return(
        <div>
            <footer className="bg-blue w-full xl:pb-2 lg:py-5 bottom-0 text-white text-sm ">
                <div className="flex lg:flex-row flex-col">
                    <div className='flex flex-col lg:pl-20 lg:pb-5 pb-0 font-poppins_regular font-bold justify-center lg:items-start items-center lg:w-[50%] h-auto w-full'>
                        <span className="lg:text-2xl text-[1rem] lg:leading-8">Saving Dogs</span>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-row justify-between w-full'>
                            <div className='flex flex-col pl-5 w-full justify-center lg:pt-0 pt-'>
                               
                            </div>

                            <div className='flex justify-end mt-[5rem] lg:w-[20%]'>
                                <a 
                                    href="https://www.sonos.com/es-mx/home" 
                                    target="_blank"
                                    rel="noreferrer"
                                    className='w-auto'
                                >
                                    <LanguageIcon className='lg:mx-5' />
                                </a>
                                <a 
                                    href="https://www.instagram.com/sonos/" 
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <InstagramIcon className='lg:mx-5 mx-2' />
                                </a>
                            </div>
                        </div>
                        {/*
                        <div className='pl-5 font-sonos_medium text-sonos-primary'>
                            <Link  to="#calendario"><span>Ver Calendario...</span></a>
                        </div>
                        */}
                    </div>
                </div>
            </footer>
        </div>
    );
}