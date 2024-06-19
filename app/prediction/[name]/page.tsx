const getPredictedAge = async (name: string)=>{
  const res = await fetch(`https://agify.io/?name=${name}`);
  return res.json()
}

const getPredictedGender = async (name: string)=>{
  const res = await fetch(`https://genderize.io/?name=${name}`);
  return res.json()
}
const getPredictedCountry
 = async (name: string)=>{
  const res = await fetch(`https://nationalize.io/?name=${name}`);
  return res.json()
}

interface Params{
  params:{name:string}
}

export default async function Page({params}:Params) {
  const ageData = getPredictedAge(params.name)
  const genderData = getPredictedAge(params.name)
  const countryData = getPredictedAge(params.name)
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">Name
       {params.name} 
      </main>
    );
  }
