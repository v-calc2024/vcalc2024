import { countries } from "@/mockups/countries";
import { states } from "@/mockups/states";

export function getCountries () {
  return countries?.data?.map((country: any) => {
    return { value: country.name, label: country.name };
  }) || []
} 

export function getStates (countryName: string) {
  let statesArr = states?.data?.filter((country: any) => {
    return country.name === countryName;
  })[0]?.states || []
  return statesArr?.map((state: any) => { return { value: state.state_code, label: state.name } }) || []
} 