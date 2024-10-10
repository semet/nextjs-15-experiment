import React, { FC, PropsWithChildren } from 'react'

export const AuthLayout: FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title
}) => {
  return (
    <div className="container mx-auto mt-10 flex max-w-md flex-col gap-4">
      <h1 className="text-center text-4xl">{title}</h1>
      <div className="rounded bg-gray-100 px-4 py-5">{children}</div>
    </div>
  )
}
