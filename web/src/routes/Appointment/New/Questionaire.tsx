import React, { useCallback, useState } from 'react'
import {
  Button,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import FormPage from '../../../layout/FormPage'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'

const doctorTypes = [
  'Ophthalmologist',
  'Dermatologist',
  'Cardiologist',
  'Psychiatrist',
  'Gastroenterologist',
  'Ear-Nose-Throat (ENT)',
  'Gynecologist / Obstetrician',
  'Neurologist',
  'Urologist',
]

const Questionnaire = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [symptoms, setSymptoms] = useState(searchParams.get('symptoms'))
  const [doctorType, setDoctorType] = useState(searchParams.get('doctorType'))
  const navigate = useNavigate()

  const handleGo = useCallback(() => {
    navigate(`list?symptoms=${symptoms}&doctorType=${doctorType}`)
  }, [symptoms, doctorType])

  return (
    <FormPage title='Find Doctors' parentPage='/home'>
      <Box
        component='form'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
      >
        <TextField
          label='Symptoms'
          onChange={(e) => {
            setSymptoms(e.target.value)
            setSearchParams({ symptoms: e.target.value })
          }}
          value={symptoms}
        />
        <FormControl>
          <InputLabel id='doctor-type-label'>Expertise</InputLabel>
          <Select
            labelId='doctor-type-label'
            label='Expertise'
            onChange={(e) => {
              setDoctorType(e.target.value)
              setSearchParams({
                doctorType: e.target.value === null ? '' : e.target.value,
              })
            }}
            value={doctorType}
          >
            {doctorTypes.map((doctorType) => (
              <MenuItem value={doctorType} key={doctorType}>
                {doctorType}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant='contained'
          onClick={handleGo}
          disabled={!symptoms || !doctorType}
        >
          Go
        </Button>
      </Box>
    </FormPage>
  )
}

export default Questionnaire
