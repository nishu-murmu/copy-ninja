import Dropdown from '../commonComponents/core/Dropdown'
import CustomInput from '../commonComponents/core/Input'
import { QueryProps } from '../../../utils/global'
import {
  queryParams,
  searchInputState,
  selectedAnswerState,
  selectedCTAState,
  selectedType,
} from '../../recoil/atoms'
import { useRecoilState } from 'recoil'
import KKDropdown from '../commonComponents/core/KKDropdown'
import { useEffect, useState } from 'react'

const CustomSection = ({ state }) => {
  const [query, setQuery] = useRecoilState<QueryProps>(queryParams)
  const [selectedAnswer, setSelectedAnswer] = useState(state.answer[0])
  const [selectedCTA, setSelectedCTA] = useState(state.cta[0])

  useEffect(() => {
    setQuery({ answer: selectedAnswer, cta: selectedCTA })
  }, [])

  return (
    <div className="px-2 py-4 text-lg text-black">
      <div className="flex justify-between">
        <div className="text-lg font-semibold text-indigo-500">CTA</div>
        <div>
          <CustomInput
            className={'accent-indigo-500 cursor-pointer'}
            type={'checkbox'}
            name={'cta'}
            id={'cta'}
            checked={true}
            setInput={(value: boolean) => setQuery((prevState) => ({ ...prevState, isCta: value }))}
          />
        </div>
      </div>
      <div className="flex flex-col my-4">
        <div className="text-base font-medium">Select Answer:</div>
        <KKDropdown
          id={'select-answer'}
          setSelected={setSelectedAnswer}
          selected={selectedAnswer}
          listData={state?.answer || []}
          labelKey={'label'}
        />
      </div>
      <div className="flex flex-col">
        <div className="text-base font-medium ">Select CTA:</div>
        <KKDropdown
          id={'select-cta'}
          setSelected={setSelectedCTA}
          selected={selectedCTA}
          listData={state?.cta || []}
          labelKey={'label'}
        />
      </div>
    </div>
  )
}

export default CustomSection
