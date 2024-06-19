interface Params{
  params:{name:string}
}

export default function Page({params}:any) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">Name
       {params.name} 
      </main>
    );
  }
