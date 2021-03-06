import { createContext } from 'react';
/**
 * Контекст для компонентов, использующих Touch в качестве корневой обёртки,
 * и для которых важно не предотвращать вспылие тач-событий от дочерних компонентов
 */

var TouchRootContext = createContext(false);
export default TouchRootContext;
//# sourceMappingURL=TouchContext.js.map