import { useEffect, useState } from "react";
import { getCountries, getStates } from "@/utils/getCountries";
import axios from "axios";
import { updateSubmitValidation } from "@/utils/volunteer_validations/submitValidation";
import { setVolunteer } from "@/services/volunteer/setVolunteer";
import { setCookie } from 'nookies'
import { useRouter } from "next/router";
import { uploadFile } from "@/services/upload/uploadFile";

export function useMyProfile({ decoded, lang }: any) {
  const [file, setFile] = useState<any>(null);
  const [other, setOther] = useState<any>('');
  const [otherRace, setOtherRace] = useState<any>('');
  const [name, setName] = useState<any>(decoded?.firstname || '');
  const [surname, setSurname] = useState<any>(decoded?.surname || '');
  const [email, setEmail] = useState<any>(decoded?.email || '');
  const [password, setPassword] = useState<any>('');
  const [repeatpassword, setRepeatpassword] = useState<any>('');
  const [age, setAge] = useState<any>(decoded?.year_birth || 2023);
  const [gender, setGender] = useState<any>(decoded?.gender || '');
  const [organisation, setOrganisation] = useState<any>(decoded?.organisation_id || '');
  const [disability, setDisability] = useState<any>(decoded?.disability || '');
  const [employment, setEmployment] = useState<any>(decoded?.employment || '');
  const [caringresponsibility, setCaringresponsibility] = useState<any>(decoded?.caring_responsability || '');
  const [volunteeredbefore, setVolunteeredbefore] = useState<any>(decoded?.volunteered_before || '');
  const [employeeVolunteer, setEmployeeVolunteer] = useState<any>(decoded?.employeeVol || '');
  const [country, setCountry] = useState<any>(decoded?.country_code || null);
  const [regions, setRegions] = useState<any>([]);
  const [region, setRegion] = useState<any>(decoded?.region_code || null);
  const [localities, setLocalities] = useState<any>([]);
  const [locality, setLocality] = useState<any>(decoded?.locality_code || null);
  const [loading, setLoading] = useState<boolean>(false);
  const [raceSel, setracesSel] = useState<any[]>(decoded?.race? JSON.parse(decoded?.race):[]);
  const [errors, setErrors] = useState<any>([]);
  const [open, setOpen] = useState(false);
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
  };

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

  function changeOther (value: any) {
    setOther(value?.target?.value)
    setErrors([])
  }

  function changeOtherRace (value: any) {
    setOtherRace(value?.target?.value)
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

  function changeName (value: any) {
    setName(value?.target?.value)
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
    const errorsArr = updateSubmitValidation({ 
      name,
      surname,
      email,
      password,
      repeatpassword,
      age,
      gender,
      organisation,
      disability,
      employment,
      caringresponsibility,
      volunteeredbefore,
      employeeVolunteer,
      country,
      region,
      locality,
      raceSel,
      lang })

    setErrors(errorsArr)
    if (!errorsArr?.length) {
      if (file?.name?.length > 0) {
        const formData = new FormData()
        formData.append('image', file)
        formData.append('folder', 'volunteers-profile')
        setLoading(true)
        uploadFile(formData)
        .then((resp: any) => {
          const body: any = {
            name,
            surname, 
            email,
            age: parseInt(age),
            gender,
            organisation: parseInt(organisation),
            disability,
            employment,
            caringresponsibility,
            volunteeredbefore,
            employeeVolunteer,
            country,
            region,
            locality,
            raceSel: JSON.stringify(raceSel),
            image: resp?.data?.data[0]?.url || null,
            imageUrl: decoded?.image
          }

          if (password?.length > 0) {
            body.password = password
          }
          setVolunteer(body)
            .then((resp: any) => {
              const token = resp.data.token
              setCookie(null, 'token', token, {
                maxAge: 60 * 60 * 24,
                path: '/',
              })
              localStorage.setItem('token', token)
              setErrors([])
              window.alert('data has been updated successfully')
              location.reload();
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
        .finally(() => {
          setLoading(false);
        })
      } 
      else {
        const body: any = {
          name,
          surname, 
          email,
          age: parseInt(age),
          gender,
          organisation: parseInt(organisation),
          disability,
          employment,
          caringresponsibility,
          volunteeredbefore,
          employeeVolunteer,
          country,
          region,
          locality,
          raceSel: JSON.stringify(raceSel),
          imageUrl: decoded?.image
        }

        if (password?.length > 0) {
          body.password = password
        }

        setVolunteer(body)
          .then((resp: any) => {
            const token = resp.data.token
            setCookie(null, 'token', token, {
              maxAge: 60 * 60 * 24,
              path: '/',
            })
            localStorage.setItem('token', token)
            setErrors([])
            window.alert('data has been updated successfully')
            location.reload();
          })
          .catch((err: any) => {
            setErrors(['Ha ingresado datos inválidos'])
          })
          .finally(() => {
            setLoading(false);
          })

        setLoading(false);
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
    organisation,
    disability,
    changeDisability,
    changeEmployment,
    employment,
    changeCaringresponsibility,
    caringresponsibility,
    changeVolunteeredbefore,
    volunteeredbefore,
    country,
    region,
    locality,
    changeRaceSel,
    raceSel,
    errors,
    handleOpen,
    handleClose,
    open,
    other,
    changeOther,
    changeOtherRace,
    otherRace,
    changeEmployeeVol
  }
}

