import { useNavigation } from '@react-navigation/native'
import React from 'react'
import CompanyLogo from '../../../common/components/CompanyLogo'
import GoBackButtonHeavy from '../../../common/components/GoBackButtonHeavy'
import JobPostImageBackground from '../../../common/components/JobPostImageBackground'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface P {
  pictureUrl: string
  logoUrl: string
}

export default ({ pictureUrl, logoUrl }: P) => {
  const navigation = useNavigation()
  const navigateBackToSearch = () => navigation.goBack()
  return (
    <JobPostImageBackground pictureUrl={pictureUrl}>
      <GoBackButtonHeavy
        editStylesForDetailedView
        onPress={navigateBackToSearch}
      />
      <CompanyLogo enableStylingForDetailedView url={logoUrl} />
    </JobPostImageBackground>
  )
}
