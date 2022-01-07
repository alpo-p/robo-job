import React from 'react'
import CompanyLogo from '../../../common/components/CompanyLogo'
import JobPostImageBackground from '../../../common/components/JobPostImageBackground'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface P {
  pictureUrl: string
  logoUrl: string
}

export default ({ pictureUrl, logoUrl }: P) => {
  return (
    <JobPostImageBackground pictureUrl={pictureUrl}>
      <CompanyLogo enableStylingForDetailedView url={logoUrl} />
    </JobPostImageBackground>
  )
}
