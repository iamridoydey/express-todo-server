import type { Request, Response, NextFunction } from "express";
export declare const healthStatus: (req: Request, res: Response) => void;
export declare const createItem: (req: Request, res: Response, next: NextFunction) => void;
export declare const getItems: (req: Request, res: Response, next: NextFunction) => void;
export declare const getItemById: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const updateItemById: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const deleteItemById: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=itemController.d.ts.map