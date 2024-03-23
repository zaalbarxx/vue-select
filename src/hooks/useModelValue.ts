export function useModelValue<TypeProps>(
  props: Readonly<TypeProps>,
  key: string,
  emit: (name: string, ...args: any[]) => void
) {}
