import { LockOpenIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export const SignIn = () => {
  return (
    <div className="flex min-h-full items-center justify-center pb-32 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-2">
        <div className="w-96 flex flex-col items-center justify-center">
          <Image
            className="mx-auto -mb-24 w-auto "
            src="/logo.png"
            alt="Your Company"
            width={500}
            height={500}
          />

          <h2 className="rounded-full  w-72 text-center drop-shadow-sm text-5xl font-bold tracking-tight text-dark">
            <p>Dev Running</p>
          </h2>
        </div>
        <form className="mt-8 space-y-6" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Senha"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center"></div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-dark hover:text-[#212121dd]"
              >
                Esqueceu sua senha?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-dark py-2 px-4 text-sm font-medium text-white hover:bg-[#212121ff] drop-shadow-lg focus:outline-none transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center  pl-3">
                <LockOpenIcon
                  className="h-5 w-5 opacity-30 group-hover:opacity-50 text-neutral-400 transition-colors  group-hover:text-primary"
                  aria-hidden="true"
                />
              </span>
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
