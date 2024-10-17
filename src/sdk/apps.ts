/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { appsGet } from "../funcs/appsGet.js";
import { appsList } from "../funcs/appsList.js";
import { appsRun, RunAcceptEnum } from "../funcs/appsRun.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export { RunAcceptEnum } from "../funcs/appsRun.js";

export class Apps extends ClientSDK {
  async list(
    options?: RequestOptions,
  ): Promise<Array<components.App>> {
    return unwrapAsync(appsList(
      this,
      options,
    ));
  }

  async get(
    request: operations.GetAppRequest,
    options?: RequestOptions,
  ): Promise<components.App> {
    return unwrapAsync(appsGet(
      this,
      request,
      options,
    ));
  }

  async run(
    request: operations.RunAppRequest,
    options?: RequestOptions & { acceptHeaderOverride?: RunAcceptEnum },
  ): Promise<operations.RunAppResponse> {
    return unwrapAsync(appsRun(
      this,
      request,
      options,
    ));
  }
}
