export type DynamicImportType = () => Promise<{
  default: React.ComponentType<any>;
}>;
export type LazyComponentType = React.LazyExoticComponent<
  React.ComponentType<any>
>;
