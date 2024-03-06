export function Main(){
  return (
    <div className="w-[500px] h-96 gap-4 m-auto mt-40 bg-slate-50 rounded-md flex  shadow-md  shadow-black flex-row">
      <div className="w-1/2 bg-sky-500 overflow-hidden rounded-md items-center justify-center text-slate-50 flex flex-col">
        <h1 className="font-bold text-xl">Seja muito Bem-vindo!!</h1>
        <p> Para a melhor tela de login</p>
      </div>
      <div className="flex items-center justify-center m-2 ">
        <form className="flex flex-col space-y-5">
          <p>Login:</p>
          <input className="outline-none px-2 border-b-2 rounded-md " type="text" placeholder="Digite seu login..."/>
          <p>Senha:</p>
          <input className="outline-none px-2 border-b-2 rounded-md " type="password" placeholder="Digite sua senha..." />
        </form>
      </div>
    </div>
  )
}