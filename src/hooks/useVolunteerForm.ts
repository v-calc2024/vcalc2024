import { useEffect, useState } from "react";
import { getCountries, getStates } from "@/utils/getCountries";
import axios from "axios";
import { submitValidation } from "@/utils/volunteer_validations/submitValidation";
import { createVolunteer } from "@/services/volunteer/createVolunteer";
import { setCookie } from 'nookies'
import { useRouter } from "next/router";
import { uploadFile } from "@/services/upload/uploadFile";

export function useVolunteerForm({ lang }: any) {
  const [file, setFile] = useState<any>(null);
  const [name, setName] = useState<any>('');
  const [other, setOther] = useState<any>('');
  const [otherRace, setOtherRace] = useState<any>('');
  const [surname, setSurname] = useState<any>('');
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const [repeatpassword, setRepeatpassword] = useState<any>('');
  const [age, setAge] = useState<any>(2023);
  const [gender, setGender] = useState<any>('');
  const [organisation, setOrganisation] = useState<any>('');
  const [disability, setDisability] = useState<any>('');
  const [employment, setEmployment] = useState<any>('');
  const [caringresponsibility, setCaringresponsibility] = useState<any>('');
  const [volunteeredbefore, setVolunteeredbefore] = useState<any>('');
  const [employeeVolunteer, setEmployeeVolunteer] = useState<any>('');
  const [country, setCountry] = useState<any>('');
  const [regions, setRegions] = useState<any>([]);
  const [region, setRegion] = useState<any>('');
  const [localities, setLocalities] = useState<any>([]);
  const [locality, setLocality] = useState<any>('');
  const [checked18, setChecked18] = useState<boolean>(true);
  const [checkedPolicy, setCheckedPolicy] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [raceSel, setracesSel] = useState<any[]>([]);
  const [errors, setErrors] = useState<any>([]);
  const router = useRouter()

  useEffect(() => {
    let newRegions: any = []
    if (country === 'Croatia') {
      newRegions = [
        {value:'Bjelovar-Bilogorska', label: 'Bjelovar-Bilogorska'}, 
        {value:'Brod-Posavina', label: 'Brod-Posavina'},
        {value:'Dubrovnik-Neretva', label: 'Dubrovnik-Neretva'},
        {value:'Istria', label: 'Istria'},
        {value:'Karlovačka', label: 'Karlovačka'},
        {value:'Koprivnica-Križevačka', label: 'Koprivnica-Križevačka'},
        {value:'Krapina-Zagorje', label: 'Krapina-Zagorje'},
        {value:'Lika-Senjska', label: 'Lika-Senjska'},
        {value:'Međimurska', label: 'Međimurska'},
        {value:'Osijek-Baranja', label: 'Osijek-Baranja'},
        {value:'Požega-Eslavonia', label: 'Požega-Eslavonia'},
        {value:'Primorsko-Goranska', label: 'Primorsko-Goranska'},
        {value:'Sisak-Moslavina', label: 'Sisak-Moslavina'},
        {value:'Split-Dalmacia', label: 'Split-Dalmacia'},
        {value:'Šibenik-Knin', label: 'Šibenik-Knin'},
        {value:'Varaždinska', label: 'Varaždinska'},
        {value:'Virovitica-Podravska', label: 'Virovitica-Podravska'},
        {value:'Vukovar-Srijemska', label: 'Vukovar-Srijemska'},
        {value:'Zadar', label: 'Zadar'},
        {value:'Zagrebačka', label: 'Zagrebačka'},
        {value:'Zagreb', label: 'Zagreb'}]
    } else {
      newRegions = getStates(country);
    }
    if (country && region) {
      if (country === 'Spain' && region === 'Madrid Province') {
        setLocalities(['Madrid'])
      }
      else {
        axios
        .post("https://countriesnow.space/api/v0.1/countries/state/cities", {
          country: country,
          state: region,
        })
        .then((response: any) => {
          setLocalities(response?.data?.data);
        })
        .catch((error: any) => {
          setLocalities([]);
          setLocality(null);
        });
      }
    }
    setRegions(newRegions);
  }, [country, region]);

  const countriesList = getCountries();

  function changeOtherRace (value: any) {
    setOtherRace(value?.target?.value)
    setErrors([])
  }

  function changeCountry(_event: any, newValue: any) {
    setLocality('');
    setRegion('');
    setCountry(newValue?.label || '');
    setRegions([]);
    setLocalities([]);
    setErrors([])
  }

  function changeRegion(_event: any, newValue: any) {
    setLocality('');
    setRegion(newValue?.label || '');
    setLocalities([]);
    setErrors([])
  }

  function changeLocality(_event: any, newValue: any) {
    setLocality(newValue);
    setErrors([])
  }

  function changeGender (value: string) {
    setGender(value)
    setOther('')
    setErrors([])
  }

  function changeDisability (value: string) {
    setDisability(value)
    setErrors([])
  }

  function changeEmployment (value: string) {
    setEmployment(value)
    setErrors([])
  }

  function changeCaringresponsibility (value: string) {
    setCaringresponsibility(value)
    setErrors([])
  }

  function changeVolunteeredbefore (value: string) {
    setVolunteeredbefore(value)
    setErrors([])
  }

  function changeEmployeeVol (value: string) {
    setEmployeeVolunteer(value)
    setErrors([])
  }

  function changeOrganisation (value: string) {
    setOrganisation(value)
    setErrors([])
  }

  function handleChange18() {
    setChecked18(!checked18);
    setErrors([])
  }

  function handleChangePolicy() {
    setCheckedPolicy(!checkedPolicy);
    setErrors([])
  }

  function changeName (value: any) {
    setName(value?.target?.value)
    setErrors([])
  }

  function changeOther (value: any) {
    setOther(value?.target?.value)
    setErrors([])
  }
  
  function changeSurname (value: any) {
    setSurname(value?.target?.value)
    setErrors([])
  }

  function changeEmail (value: any) {
    setEmail(value?.target?.value)
    setErrors([])
  }

  function changePassword (value: any) {
    setPassword(value?.target?.value)
    setErrors([])
  }

  function changeResetpassword (value: any) {
    setRepeatpassword(value?.target?.value)
    setErrors([])
  }

  function changeAge (value: any) {
    setAge(value)
    setErrors([])
  }

  function changeRaceSel(element: string) {
    if (raceSel.includes(element)) {
      setracesSel((prev) => prev.filter((item) => item !== element));
      setErrors([])
    } else {
      setracesSel((prev) => [...prev, element]);
      setErrors([])
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const errorsArr = submitValidation({ name, surname, email, other, password, repeatpassword, age, gender, organisation, disability, employment, caringresponsibility, volunteeredbefore, employeeVolunteer, country, region, locality, raceSel, checked18, checkedPolicy, lang })
    setErrors(errorsArr)
    if (!errorsArr?.length) {
        if (file?.name?.length > 0) {
          const formData = new FormData()
          formData.append('image', file)
          formData.append('folder', 'volunteers-profile')
          setLoading(true)
          uploadFile(formData)
          .then((resp: any) => {
            const body = { name, surname, email, password, repeatpassword, age: parseInt(age), gender, organisation: parseInt(organisation),
              disability, employment, caringresponsibility, volunteeredbefore, country, region, locality, employeeVolunteer,
              raceSel: JSON.stringify(raceSel), checked18, checkedPolicy, image: resp?.data?.data[0]?.url || null }
            createVolunteer(body)
              .then((resp: any) => {
                const token = resp.data.token
                setCookie(null, 'token', token, {
                  maxAge: 60 * 60 * 24,
                  path: '/',
                })
                localStorage.setItem('token', token)
                window.alert('An email has been sent to you to verify your account')
              })
              .catch((err: any) => {
                setErrors(['Ha ingresado datos inválidos'])
              })
              .finally(() => {
                setLoading(false);
              })
          }).catch((err: any) => {
            setErrors(['Se ha producido un error'])
          })
        } else {
          const body = { name, surname, email, password, repeatpassword, age: parseInt(age), gender, organisation: parseInt(organisation),
            disability, employment, caringresponsibility, volunteeredbefore, employeeVolunteer, country, region, locality,
            raceSel: JSON.stringify(raceSel), checked18, checkedPolicy, image: null }
          setLoading(true)
          createVolunteer(body)
            .then((resp: any) => {
              const token = resp.data.token
              setCookie(null, 'token', token, {
                maxAge: 60 * 60 * 24,
                path: '/',
              })
              localStorage.setItem('token', token)
              window.alert('An email has been sent to you to verify your account')
              window.location.href = "/login"
            })
            .catch((err: any) => {
              setErrors(['Ha ingresado datos inválidos'])
            })
            .finally(() => {
              setLoading(false);
            })
        }
    }
  }

  return {
    handleSubmit,
    setFile,
    file,
    countriesList,
    changeCountry,
    regions,
    changeRegion,
    localities,
    changeLocality,
    checked18,
    handleChange18,
    checkedPolicy,
    handleChangePolicy,
    loading,
    name,
    changeName,
    surname,
    changeSurname,
    email,
    changeEmail,
    password,
    changePassword,
    repeatpassword,
    changeResetpassword,
    age,
    changeAge,
    changeGender,
    gender,
    changeOrganisation,
    changeDisability,
    changeEmployment,
    changeCaringresponsibility,
    changeVolunteeredbefore,
    country,
    region,
    locality,
    changeRaceSel,
    raceSel,
    errors,
    changeOther,
    other,
    changeOtherRace,
    otherRace,
    changeEmployeeVol
  }
}
