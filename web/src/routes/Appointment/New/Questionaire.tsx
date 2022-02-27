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
  const [symptoms, setSymptoms] = useState('')
  const [doctorType, setDoctorType] = useState('')
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
          onChange={(e) => setSymptoms(e.target.value)}
          value={symptoms}
        />
        <FormControl>
          <InputLabel id='doctor-type-label'>Expertise</InputLabel>
          <Select
            labelId='doctor-type-label'
            label='Expertise'
            onChange={(e) => setDoctorType(e.target.value)}
            value={doctorType}
          >
            {doctorTypes.map((doctorType) => (
              <MenuItem value={doctorType} key={doctorType}>
                {doctorType}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button onClick={handleGo} disabled={!symptoms || !doctorType}>
          Go
        </Button>
      </Box>
    </FormPage>
  )
}

export default Questionnaire
