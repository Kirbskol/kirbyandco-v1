import React, { useState, useEffect } from 'react'
import { Text } from '../../Design/Typography'
import { 
  backgroundColor, 
  lighterBackgroundColor, 
  darkerBackgroundColor, 
  kirbyBlue, 
  borderColor } from '../../Design/Colors'
import { ContactCards, SectionCards, ServiceCards } from '../../Design/SectionCard'
import { 
  welcomeClose, 
  welcomeDescription, 
  welcomeHeader, 
  welcomePhone, 
  welcomeServices 
} from '../../Constants/textContent'
import { 
  skolCDN_URL, 
  galleryImages_URL 
} from '../../Constants/urls'
import { 
  ArrowLeft,
  ArrowRight,
  Phone 
} from '../../Design/Icons'

export const HomeWelcome = () => {

  return(
  <>
    <div className="flex justify-center p-2 sm:w-1/2">    
      <SectionCards 
        backgroundColor={backgroundColor} 
        lighterBackgroundColor={kirbyBlue} 
        borderColor={borderColor}
        classes="w-[95vw] sm:w-full [@media(min-width:2040px)]:w-[65em]"
        header="Keep it Local, Keep it Frinton">
          <div className="flex flex-col justify-start gap-4 sm:h-full h-[45em]">
            <div className="flex border-b pb-4 [@media(min-width:2040px)]:pb-8">
              <Text variant="h6" classes="">
                {welcomeHeader}
              </Text>
            </div>
            <div className="flex [@media(min-width:2040px)]:pt-4">
              <Text variant="body">
                {welcomeDescription}
              </Text>
            </div>
            <div className="flex [@media(min-width:2040px)]:pt-12">
              <Text variant="body" classes="font-semibold">
                Services we offer:
              </Text>
            </div>
            {welcomeServices && (
            <div className="flex justify-center gap-1 sm:gap-4 flex-wrap max-h-[12em]">
              {welcomeServices.map(service =>{
                return (
                  <ServiceCards 
                    header={service.service} 
                    classes={`w-[7em] h-full sm:w-[14em] [@media(min-width:2040px)]:w-[16em] hover:cursor-default hover:bg-[${backgroundColor}]`}
                  >
                    <div key={service.id} className="text-sm">
                      <Text variant="alternate">
                        {service.description}
                      </Text>
                    </div>
                  </ServiceCards>
                )
              })}
            </div>
            )}
          </div>
      </SectionCards>
    </div>   
  </>
  )
}

export const HomeReel = () => {
  const images = Object.values(galleryImages_URL).map(img => skolCDN_URL + img)
  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 4000)
    return () => clearInterval(interval)
  }, [current, images.length])

  const handlePrev = () => {
    setFade(false)
    setTimeout(() => {
      setCurrent((current - 1 + images.length) % images.length)
      setFade(true)
    }, 2000)
  }

  const handleNext = () => {
    setFade(false)
    setTimeout(() => {
      setCurrent((current + 1) % images.length)
      setFade(true)
    }, 500)
  }

  return (
    <div className="flex justify-center p-2 sm:w-1/4">
      <SectionCards
        backgroundColor={backgroundColor}
        lighterBackgroundColor={kirbyBlue}
        borderColor={borderColor}
        header="Gallery"
        classes="w-[95vw] sm:w-full"
      >
        <div className="flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            <img
              src={images[current]}
              alt={`Gallery ${current + 1}`}
              className={`object-fill w-full h-full rounded transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
            />
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 hover:cursor-pointer bg-opacity-70 rounded-full p-2"
              style={{backgroundColor}}
              aria-label="Previous"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 hover:cursor-pointer bg-opacity-70 rounded-full p-2"
              style={{backgroundColor}}
              aria-label="Next"
            >
              <ArrowRight />
            </button>
          </div>
          <div className="mt-2 text-sm text-gray-100">
            {current + 1} / {images.length}
          </div>
        </div>
      </SectionCards>
    </div>
  )
}

export const HomeContact = () => {

  return(
  <>
    <div className="flex flex-col justify-around sm:w-1/4 items-center p-2">    
      <SectionCards 
        backgroundColor={backgroundColor} 
        lighterBackgroundColor={kirbyBlue} 
        borderColor={borderColor}
        header="Get In Touch!"
        classes="w-[95vw] sm:w-full sm:max-w-[40em]">
        <div className="flex flex-col gap-10">
          <div className="hidden sm:flex flex-col justify-center gap-4">
            <div className="flex border-b pb-4">
              <Text variant="h6" classes="">
                {welcomePhone}
              </Text>
            </div>
            <div className="flex">
              <Text variant="body">
                {welcomeClose}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <ContactCards 
              backgroundColor={backgroundColor} 
              lighterBackgroundColor={kirbyBlue} 
              borderColor={borderColor}
              header="Call us on:"
              classes=""
              category="phone">
              <div className="flex sm:flex-col w-full sm:h-[8em] justify-around items-center">
                <a href="tel:+441255850086" className="sm:pb-2">
                  <Text variant="h2alt" classes="hover:cursor-pointer hover:text-[#E5AA70]">
                    01255 850086
                  </Text>
                </a>
                <div className="hidden sm:flex border w-full" />
                <a href="tel:+447399931444" className="sm:pt-2">
                  <Text variant="h2alt" classes="hover:cursor-pointer hover:text-[#E5AA70]">
                    07399 931444
                  </Text>
                </a>
              </div>
            </ContactCards>
            <ContactCards 
              backgroundColor={backgroundColor} 
              lighterBackgroundColor={kirbyBlue} 
              borderColor={borderColor}
              header="Email us at:"
              classes=""
              category="mail">
              <div className="flex flex-col w-full items-center">
                <a href="mailto:info@kirbyandcoplumbing.com" className="pb-2">
                  <Text variant="body" classes="hover:cursor-pointer hover:text-[#E5AA70] font-semibold">
                    info@kirbyandcoplumbing.com
                  </Text>
                </a>
              </div>
            </ContactCards>
          </div>
        </div>
      </SectionCards>
    </div>   
  </>
  )
}