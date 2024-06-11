import axios from "axios";
import { useEffect, useState } from "react";
import { getCountries, getStates } from "@/utils/getCountries";
import { updateSubmitValidation } from "@/utils/ong_validations/submitValidation";
import { useRouter } from "next/router";
import { setCookie } from 'nookies'
import { uploadFile } from "@/services/upload/uploadFile";
import { setNGO } from "@/services/ong/setNGO";

export function useMyNGOForm ({ decoded, lang }: any) {
  const [file, setFile] = useState<any>(null);
  const [name, setName] = useState<any>(decoded?.name || '');
  const [email, setEmail] = useState<any>(decoded?.email || '');
  const [password, setPassword] = useState<any>("");
  const [repeatpassword, setRepeatPassword] = useState<any>("");
  const [employees, setEmployees] = useState<any>(decoded?.employees || 0);
  const [hourWages, setHourWages] = useState<any>(decoded?.hour_wage || 0);
  const [volunteers, setVolunteers] = useState<any>(decoded?.volunteers || 0);
  const [annualincome, setAnnualincome] = useState<any>(decoded?.annual_income || 0);
  const [opennumberofdonors, setOpennumberofdonors] = useState<any>(decoded?.fundraising_number_of_donors || 1);
  const [opentotalamountfundraising, setOpentotalamountfundraising] =
    useState<any>(decoded?.fundraising_total_amount || 1);
  const [opennumberofmembers, setOpennumberofmembers] = useState<any>(decoded?.membership_number_of_members || 1);
  const [opentotalamountmembership, setOpentotalamountmembership] =
    useState<any>(decoded?.membership_total_amount || 1);
  const [country, setCountry] = useState<any>(decoded?.country_code || null);
  const [regions, setRegions] = useState<any>([]);
  const [region, setRegion] = useState<any>(decoded?.region_code || null);
  const [localities, setLocalities] = useState<any>([]);
  const [locality, setLocality] = useState<any>(decoded?.locality_code || null);
  const [checkedFundraising, setCheckedFundraising] = useState<boolean>(decoded?.is_fundraising === 0 ? false : true);
  const [checkedMembership, setCheckedMembership] = useState<boolean>(decoded?.is_membership === 0 ? false : true);
  const [loading, setLoading] = useState<boolean>(false);
  const [orgObjetives, setOrgObjetives] = useState<any[]>(decoded?.organisation_objetive? JSON.parse(decoded?.organisation_objetive) : []);
  const [errors, setErrors] = useState<any>([]);
  const [comment, setComment] = useState<any>("");

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

  function changeOrgObjetives(element: string) {
    if (orgObjetives.includes(element)) {
      setOrgObjetives((prev) => prev.filter((item) => item !== element));
    } else {
      setOrgObjetives((prev) => [...prev, element]);
    }
  }

  const countriesList = getCountries();

  function changeName(value: any) {
    setName(value?.target?.value);
    setErrors([])
  }

  function changeEmail(value: any) {
    setEmail(value?.target?.value);
    setErrors([])
  }

  function changePassword(value: any) {
    setPassword(value?.target?.value);
    setErrors([])
  }

  function changeResetPassword(value: any) {
    setRepeatPassword(value?.target?.value);
    setErrors([])
  }

  function changeEmployees(event: any) {
    if (event?.target?.value >= 0) {
      setEmployees(event?.target?.value);
    } else {
      setEmployees(0)
    }
    setErrors([])
  }

  function changeComment (event: any) {
    setComment(event.target.value)
  }

  function changeHourWages(event: any) {
    if (event?.target?.value >= 0) {
      setHourWages(event?.target?.value);
    } else {
      setHourWages(0)
    }
    setErrors([])
  }

  function changeVolunteers(event: any) {
    if (event?.target?.value >= 0) {
      setVolunteers(event?.target?.value);
    } else {
      setVolunteers(0)
    }
    setErrors([])
  }

  function changeAnnualincome (value: string) {
    setAnnualincome(value)
    setErrors([])
  }

  function changeOpennumberofdonors(event: any) {
    if (event?.target?.value >= 0) {
      setOpennumberofdonors(event?.target?.value);
    } else {
      setOpennumberofdonors(0)
    }
    setErrors([])
  }

  function changeOpentotalamountfundraising(event: any) {
    if (event?.target?.value >= 0) {
      setOpentotalamountfundraising(event?.target?.value);
    } else {
      setOpentotalamountfundraising(0)
    }
    setErrors([])
  }

  function changeOpennumberofmembers(event: any) {
    if (event?.target?.value >= 0) {
      setOpennumberofmembers(event?.target?.value);
    } else {
      setOpennumberofmembers(0)
    }
    setErrors([])
  }

  function changeOpentotalamountmembership(event: any) {
    if (event?.target?.value >= 0) {
      setOpentotalamountmembership(event?.target?.value);
    } else {
      setOpentotalamountmembership(0)
    }
    setErrors([])
  }

  function changeCountry(_event: any, newValue: any) {
    setLocality("");
    setRegion("");
    setCountry(newValue?.label || "");
    setRegions([]);
    setLocalities([]);
    setErrors([])
  }

  function changeRegion(_event: any, newValue: any) {
    setLocality("");
    setRegion(newValue?.label || "");
    setLocalities([]);
    setErrors([])
  }

  function changeLocality(_event: any, newValue: any) {
    setLocality(newValue);
    setErrors([])
  }

  function handleChangeFundraising() {
    setCheckedFundraising(!checkedFundraising);
    setErrors([])
  }

  function handleChangeMembership() {
    setCheckedMembership(!checkedMembership);
    setErrors([])
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    
    let transformedOrgObjetives = orgObjetives
    if (comment.length > 0) {
      if (!orgObjetives.includes('20')) {
        transformedOrgObjetives = [...orgObjetives, '20']
      }
    }

    const errorsArr = updateSubmitValidation({ name, email, password, employees, hourWages, repeatpassword, volunteers, annualincome, 
      opentotalamountmembership, opennumberofmembers, opennumberofdonors, opentotalamountfundraising, orgObjetives: transformedOrgObjetives, 
      country, region, checkedFundraising, checkedMembership, lang })

    setErrors(errorsArr)

    if (!errorsArr?.length) {
      setLoading(true);
      if (file?.name?.length > 0) {
        const formData = new FormData()
        formData.append('image', file)
        formData.append('folder', 'ngos-profile')
        setLoading(true)
        uploadFile(formData)
        .then((resp: any) => {
          const body: any = {
            name,
            email,
            employees: parseInt(employees),
            hourWages: parseFloat(hourWages),
            repeatpassword,
            volunteers: parseInt(volunteers),
            annualincome, 
            opentotalamountmembership: parseInt(opentotalamountmembership),
            opennumberofmembers: parseInt(opennumberofmembers),
            opennumberofdonors: parseInt(opennumberofdonors), 
            opentotalamountfundraising: parseInt(opentotalamountfundraising),
            orgObjetives: JSON.stringify(transformedOrgObjetives),
            country,
            region,
            locality,
            checkedFundraising,
            checkedMembership,
            image: resp?.data?.data[0]?.url || null,
            imageUrl: decoded?.image
          }

          if (password?.length > 0) {
            body.password = password
          }

          setNGO(body)
            .then((resp: any) => {
              const token = resp.data.token
              setCookie(null, 'token', token, {
                maxAge: 60 * 60 * 24,
                path: '/',
              })
              localStorage.setItem('token', token)
              window.alert('data has been updated successfully')
              location.reload();
            })
            .catch(() => {
              setErrors(['Ha ingresado datos inválidos'])
            })
            .finally(() => {
              setLoading(false);
            })
        }).catch((err: any) => {
          setErrors(['Se ha producido un error'])
        }).finally(() => {
          setLoading(false);
        })
      }  else {
        const body: any = {
          name,
          email,
          employees: parseInt(employees),
          hourWages: parseFloat(hourWages),
          repeatpassword,
          volunteers: parseInt(volunteers),
          annualincome, 
          opentotalamountmembership: parseInt(opentotalamountmembership),
          opennumberofmembers: parseInt(opennumberofmembers),
          opennumberofdonors: parseInt(opennumberofdonors), 
          opentotalamountfundraising: parseInt(opentotalamountfundraising),
          orgObjetives: JSON.stringify(transformedOrgObjetives),
          country,
          region,
          locality,
          checkedFundraising,
          checkedMembership,
          image: null,
          imageUrl: decoded?.image
        }

        if (password?.length > 0) {
          body.password = password
        }

        setNGO(body)
          .then((resp: any) => {
            const token = resp.data.token
            setCookie(null, 'token', token, {
              maxAge: 60 * 60 * 24,
              path: '/',
            })
            localStorage.setItem('token', token)
            window.alert('data has been updated successfully')
            location.reload();
          })
          .catch(() => {
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
    changeName,
    name,
    changeEmail,
    email,
    changePassword,
    password,
    changeResetPassword,
    repeatpassword,
    changeEmployees,
    employees,
    changeHourWages,
    hourWages,
    changeVolunteers,
    volunteers,
    changeAnnualincome,
    annualincome,
    countriesList,
    changeCountry,
    country,
    regions,
    changeRegion,
    region,
    localities,
    changeLocality,
    locality,
    checkedFundraising,
    handleChangeFundraising,
    changeOpennumberofdonors,
    opennumberofdonors,
    changeOpentotalamountfundraising,
    opentotalamountfundraising,
    checkedMembership,
    handleChangeMembership,
    changeOpennumberofmembers,
    opennumberofmembers,
    changeOpentotalamountmembership,
    opentotalamountmembership,
    loading,
    changeOrgObjetives,
    orgObjetives,
    errors,
    changeComment,
    comment
  }
}
