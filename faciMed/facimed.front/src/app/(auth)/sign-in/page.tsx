export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <div className="w-full max-w-md space-y-6">
        {/* Logo/Cabeçalho */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black font-roboto">FaCiMED</h1>
          <p className="mt-2 text-gray-600 font-roboto font-semibold text-lg leading-6">
            Seja bem vindo a FaciMED
          </p>
          <p className="text-sm text-gray-500 font-roboto leading-5">
            Faça login para acessar sua conta e explorar nossos produtos. Ainda
            não tem uma conta?{" "}
            <a
              href="/sign-up"
              className="font-medium text-[#049766] hover:text-[#03875c]"
            >
              Registre-se agora!
            </a>
          </p>
        </div>

        {/* Formulário de Login */}
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 font-roboto"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 font-roboto"
                placeholder="seu@email.com"
              />
            </div>

            {/* Senha */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 font-roboto"
              >
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 font-roboto"
                placeholder="sua senha"
              />
            </div>
          </div>

          {/* Opções */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700 font-roboto"
              >
                Manter conectado
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-[#049766] hover:text-[#03875c]"
              >
                Esqueceu sua senha?
              </a>
            </div>
          </div>

          {/* Botão de Entrar */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#049766] hover:bg-[#03875c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#049766] font-roboto"
            >
              Entrar
            </button>
          </div>
        </form>

        {/* Divisor */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500 font-roboto">
              ou continue com
            </span>
          </div>
        </div>

        {/* Login Social - Apenas Google */}
        <div className="flex justify-center">
          <button
            type="button"
            className="w-full max-w-xs inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 font-roboto"
          >
            <span>Continuar com o Google</span>
          </button>
        </div>

        {/* Link para Cadastro */}
        <div className="text-center text-sm text-gray-600 font-roboto">
          Não possui uma conta?{" "}
          <a
            href="/sign-up"
            className="font-medium text-[#049766] hover:text-[#03875c]"
          >
            Criar conta
          </a>
        </div>
      </div>
    </div>
  );
}
