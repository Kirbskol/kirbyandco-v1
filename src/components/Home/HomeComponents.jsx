import React from 'react'
import { Text } from '../../Design/Typography'
import { backgroundColor, lighterBackgroundColor, darkerBackgroundColor, kirbyBlue, borderColor } from '../../Design/Colors'
import { SectionCards, ServiceCards } from '../../Design/SectionCard'
import { welcomeClose, welcomeDescription, welcomeHeader, welcomePhone, welcomeServices } from '../../Constants/textContent'

export const WelcomeContainer = () => {

  return(
  <>
    <div className="flex justify-center p-2">    
      <SectionCards 
        backgroundColor={backgroundColor} 
        lighterBackgroundColor={kirbyBlue} 
        borderColor={borderColor}
        header="Keep it Local, Keep it Frinton">
          <div className="flex flex-col justify-center gap-4">
            <div className="flex border-b pb-4">
              <Text variant="h6" classes="">
                {welcomeHeader}
              </Text>
            </div>
            <div className="flex">
              <Text variant="body">
                {welcomeDescription}
              </Text>
            </div>
            <div className="flex">
              <Text variant="body">
                Services we offer:
              </Text>
            </div>
            {welcomeServices && (
            <div className="flex justify-center gap-4 flex-wrap max-h-[12em]">
              {welcomeServices.map(service =>{
                return (
                  <ServiceCards header={service.service} classes="w-[12em]">
                    <span key={service.id} className="text-sm">
                      {service.description}
                    </span>
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