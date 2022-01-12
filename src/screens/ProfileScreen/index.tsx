import { useTheme } from '@react-navigation/native'
import React, { useContext, useRef, useState } from 'react'
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { VerticalSpaceOf16 } from '../../common/components/VerticalSpaceOf16'
import { VerticalSpaceOf24 } from '../../common/components/VerticalSpaceOf24'
import { GlobalBooleansContext } from '../../contexts/GlobalBooleansProvider'
import HelloText from './components/HelloText'
import InputComponent from './components/InputComponent'
import SaveProfileButton from './components/SaveProfileButton'

const WHITE_BOX_BASE_SIZE = 48

const PLACEHOLDERS = {
  name: 'Jared Dunn',
  summary: `I am a business graduate with a degree in Marketing looking for work in the field.
I have worked as a marketing generalist in a small business handling all sides, such as updating websites and copywriting.
People say I am diligent and easy to work with. I'm looking for full-time offers.`,
  xp: `- Marketing coordinator: Pied Piper (2017-2021)
- Cashier: K-Market Ilola (2010-2017)`,
  education: `- Msc. Marketing - Trolls of Trinity Christian College in Illinois (2010)
- High school degree - Nowheria in the middle of NowWhere (2005)`,
  links: 'www.linked.com/alpopanula',
}

export default () => {
  const { colors } = useTheme()
  const viewRef = useRef<ScrollView | null>(null)
  const { setGlobalBooleans } = useContext(GlobalBooleansContext)

  const [name, setName] = useState('')
  const [summary, setSummary] = useState('')
  const [experience, setExperience] = useState('')
  const [education, setEducation] = useState('')
  const [links, setLinks] = useState('')

  const onTextInputFocus = () => {
    console.log('textinputfocus on profile')
  }

  const saveProfile = () => {
    console.log('saving profile')
    Keyboard.dismiss()
    setGlobalBooleans(s => {
      const state = { ...s }
      state.showProfileBadge = false
      return state
    })
    Alert.alert('Saved profile!')
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          style={{
            backgroundColor: colors.primary,
            margin: 8,
            paddingTop: 24,
            paddingBottom: 44,
            height: '99%',
            borderRadius: 15,
            borderColor: colors.primary,
            borderWidth: 4,
          }}
          ref={viewRef}
        >
          <HelloText />
          <InputComponent
            title="my name is"
            height={WHITE_BOX_BASE_SIZE}
            placeholder={PLACEHOLDERS.name}
            value={name}
            onChangeText={setName}
            onFocus={onTextInputFocus}
          />
          <VerticalSpaceOf16 />
          <InputComponent
            title="who am I"
            height={WHITE_BOX_BASE_SIZE * 4}
            placeholder={PLACEHOLDERS.summary}
            value={summary}
            onChangeText={setSummary}
            onFocus={onTextInputFocus}
            multiline
          />
          <VerticalSpaceOf16 />
          <InputComponent
            title="linkedin or other links"
            height={WHITE_BOX_BASE_SIZE * 2}
            placeholder={PLACEHOLDERS.links}
            value={links}
            onChangeText={setLinks}
            onFocus={onTextInputFocus}
            multiline
          />
          <VerticalSpaceOf16 />
          <InputComponent
            title="work experience"
            height={WHITE_BOX_BASE_SIZE * 3}
            placeholder={PLACEHOLDERS.xp}
            value={experience}
            onChangeText={setExperience}
            onFocus={onTextInputFocus}
            multiline
            optional
          />
          <VerticalSpaceOf16 />
          <InputComponent
            title="schools"
            height={WHITE_BOX_BASE_SIZE * 3}
            placeholder={PLACEHOLDERS.education}
            value={education}
            onChangeText={setEducation}
            onFocus={onTextInputFocus}
            multiline
            optional
          />
          <VerticalSpaceOf24 />
          <SaveProfileButton onPress={saveProfile} />
          <View
            style={{
              marginTop: 24 * 5,
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
