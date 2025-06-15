var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// .wrangler/tmp/bundle-XLZcjn/strip-cf-connecting-ip-header.js
function stripCfConnectingIPHeader(input, init2) {
  const request = new Request(input, init2);
  request.headers.delete("CF-Connecting-IP");
  return request;
}
var init_strip_cf_connecting_ip_header = __esm({
  ".wrangler/tmp/bundle-XLZcjn/strip-cf-connecting-ip-header.js"() {
    "use strict";
    __name(stripCfConnectingIPHeader, "stripCfConnectingIPHeader");
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        return Reflect.apply(target, thisArg, [
          stripCfConnectingIPHeader.apply(null, argArray)
        ]);
      }
    });
  }
});

// node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance2;
var init_performance = __esm({
  "node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance2 = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance2;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir4, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x2, y3, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env3) {
        return 1;
      }
      hasColors(count4, env3) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    Process = class _Process2 extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process2.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      #cwd = "/";
      chdir(cwd3) {
        this.#cwd = cwd3;
      }
      cwd() {
        return this.#cwd;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return "";
      }
      get versions() {
        return {};
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, exit, platform, nextTick, unenvProcess, abort, addListener, allowedNodeEnvironmentFlags, hasUncaughtExceptionCaptureCallback, setUncaughtExceptionCaptureCallback, loadEnvFile, sourceMapsEnabled, arch, argv, argv0, chdir, config, connected, constrainedMemory, availableMemory, cpuUsage, cwd, debugPort, dlopen, disconnect, emit, emitWarning, env, eventNames, execArgv, execPath, finalization, features, getActiveResourcesInfo, getMaxListeners, hrtime3, kill, listeners, listenerCount, memoryUsage, on, off, once, pid, ppid, prependListener, prependOnceListener, rawListeners, release, removeAllListeners, removeListener, report, resourceUsage, setMaxListeners, setSourceMapsEnabled, stderr, stdin, stdout, title, throwDeprecation, traceDeprecation, umask, uptime, version, versions, domain, initgroups, moduleLoadList, reallyExit, openStdin, assert2, binding, send, exitCode, channel, getegid, geteuid, getgid, getgroups, getuid, setegid, seteuid, setgid, setgroups, setuid, permission, mainModule, _events, _eventsCount, _exiting, _maxListeners, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _disconnect, _handleQueue, _pendingMessage, _channel, _send, _linkedBinding, _process, process_default;
var init_process2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    ({ exit, platform, nextTick } = getBuiltinModule(
      "node:process"
    ));
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      nextTick
    });
    ({
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      finalization,
      features,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      on,
      off,
      once,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// .wrangler/tmp/pages-aJ3rp1/chunks/internal_CwtpzG_q.mjs
function appendForwardSlash(path) {
  return path.endsWith("/") ? path : path + "/";
}
function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function collapseDuplicateTrailingSlashes(path, trailingSlash) {
  if (!path) {
    return path;
  }
  return path.replace(MANY_TRAILING_SLASHES, trailingSlash ? "/" : "") || "/";
}
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map((path, i2) => {
    if (i2 === 0) {
      return removeTrailingForwardSlash(path);
    } else if (i2 === paths.length - 1) {
      return removeLeadingForwardSlash(path);
    } else {
      return trimSlashes(path);
    }
  }).join("/");
}
function slash(path) {
  return path.replace(/\\/g, "/");
}
function fileExtension(path) {
  const ext = path.split(".").pop();
  return ext !== path ? `.${ext}` : "";
}
function hasFileExtension(path) {
  return WITH_FILE_EXT.test(path);
}
var MANY_TRAILING_SLASHES, WITH_FILE_EXT;
var init_internal_CwtpzG_q = __esm({
  ".wrangler/tmp/pages-aJ3rp1/chunks/internal_CwtpzG_q.mjs"() {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    __name(appendForwardSlash, "appendForwardSlash");
    __name(prependForwardSlash, "prependForwardSlash");
    MANY_TRAILING_SLASHES = /\/{2,}$/g;
    __name(collapseDuplicateTrailingSlashes, "collapseDuplicateTrailingSlashes");
    __name(removeTrailingForwardSlash, "removeTrailingForwardSlash");
    __name(removeLeadingForwardSlash, "removeLeadingForwardSlash");
    __name(trimSlashes, "trimSlashes");
    __name(isString, "isString");
    __name(joinPaths, "joinPaths");
    __name(slash, "slash");
    __name(fileExtension, "fileExtension");
    WITH_FILE_EXT = /\/[^/]+\.\w+$/;
    __name(hasFileExtension, "hasFileExtension");
  }
});

// .wrangler/tmp/pages-aJ3rp1/chunks/astro/server_jD9syGVz.mjs
function normalizeLF(code) {
  return code.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}
function codeFrame(src, loc) {
  if (!loc || loc.line === void 0 || loc.column === void 0) {
    return "";
  }
  const lines = normalizeLF(src).split("\n").map((ln) => ln.replace(/\t/g, "  "));
  const visibleLines = [];
  for (let n = -2; n <= 2; n++) {
    if (lines[loc.line + n]) visibleLines.push(loc.line + n);
  }
  let gutterWidth = 0;
  for (const lineNo of visibleLines) {
    let w2 = `> ${lineNo}`;
    if (w2.length > gutterWidth) gutterWidth = w2.length;
  }
  let output = "";
  for (const lineNo of visibleLines) {
    const isFocusedLine = lineNo === loc.line - 1;
    output += isFocusedLine ? "> " : "  ";
    output += `${lineNo + 1} | ${lines[lineNo]}
`;
    if (isFocusedLine)
      output += `${Array.from({ length: gutterWidth }).join(" ")}  | ${Array.from({
        length: loc.column
      }).join(" ")}^
`;
  }
  return output;
}
function init(x2, y3) {
  let rgx = new RegExp(`\\x1b\\[${y3}m`, "g");
  let open = `\x1B[${x2}m`, close = `\x1B[${y3}m`;
  return function(txt) {
    if (!$.enabled || txt == null) return txt;
    return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
async function renderEndpoint(mod, context3, isPrerendered, logger) {
  const { request, url } = context3;
  const method = request.method.toUpperCase();
  let handler = mod[method] ?? mod["ALL"];
  if (!handler && method === "HEAD" && mod["GET"]) {
    handler = mod["GET"];
  }
  if (isPrerendered && !["GET", "HEAD"].includes(method)) {
    logger.warn(
      "router",
      `${url.pathname} ${bold(
        method
      )} requests are not available in static endpoints. Mark this page as server-rendered (\`export const prerender = false;\`) or update your config to \`output: 'server'\` to make all your pages server-rendered by default.`
    );
  }
  if (handler === void 0) {
    logger.warn(
      "router",
      `No API Route handler exists for the method "${method}" for the route "${url.pathname}".
Found handlers: ${Object.keys(mod).map((exp) => JSON.stringify(exp)).join(", ")}
` + ("all" in mod ? `One of the exported handlers is "all" (lowercase), did you mean to export 'ALL'?
` : "")
    );
    return new Response(null, { status: 404 });
  }
  if (typeof handler !== "function") {
    logger.error(
      "router",
      `The route "${url.pathname}" exports a value for the method "${method}", but it is of the type ${typeof handler} instead of a function.`
    );
    return new Response(null, { status: 500 });
  }
  let response = await handler.call(mod, context3);
  if (!response || response instanceof Response === false) {
    throw new AstroError(EndpointDidNotReturnAResponse);
  }
  if (REROUTABLE_STATUS_CODES.includes(response.status)) {
    try {
      response.headers.set(REROUTE_DIRECTIVE_HEADER, "no");
    } catch (err) {
      if (err.message?.includes("immutable")) {
        response = new Response(response.body, response);
        response.headers.set(REROUTE_DIRECTIVE_HEADER, "no");
      } else {
        throw err;
      }
    }
  }
  if (method === "HEAD") {
    return new Response(null, response);
  }
  return response;
}
function isPromise(value) {
  return !!value && typeof value === "object" && "then" in value && typeof value.then === "function";
}
async function* streamAsyncIterator(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return;
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}
function isHTMLString(value) {
  return Object.prototype.toString.call(value) === "[object HTMLString]";
}
function markHTMLBytes(bytes) {
  return new HTMLBytes(bytes);
}
function hasGetReader(obj) {
  return typeof obj.getReader === "function";
}
async function* unescapeChunksAsync(iterable) {
  if (hasGetReader(iterable)) {
    for await (const chunk of streamAsyncIterator(iterable)) {
      yield unescapeHTML(chunk);
    }
  } else {
    for await (const chunk of iterable) {
      yield unescapeHTML(chunk);
    }
  }
}
function* unescapeChunks(iterable) {
  for (const chunk of iterable) {
    yield unescapeHTML(chunk);
  }
}
function unescapeHTML(str) {
  if (!!str && typeof str === "object") {
    if (str instanceof Uint8Array) {
      return markHTMLBytes(str);
    } else if (str instanceof Response && str.body) {
      const body = str.body;
      return unescapeChunksAsync(body);
    } else if (typeof str.then === "function") {
      return Promise.resolve(str).then((value) => {
        return unescapeHTML(value);
      });
    } else if (str[Symbol.for("astro:slot-string")]) {
      return str;
    } else if (Symbol.iterator in str) {
      return unescapeChunks(str);
    } else if (Symbol.asyncIterator in str || hasGetReader(str)) {
      return unescapeChunksAsync(str);
    }
  }
  return markHTMLString(str);
}
function isVNode(vnode) {
  return vnode && typeof vnode === "object" && vnode[AstroJSX];
}
function createRenderInstruction(instruction) {
  return Object.defineProperty(instruction, RenderInstructionSymbol, {
    value: true
  });
}
function isRenderInstruction(chunk) {
  return chunk && typeof chunk === "object" && chunk[RenderInstructionSymbol];
}
function r(e) {
  var t, f2, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o2 = e.length;
    for (t = 0; t < o2; t++) e[t] && (f2 = r(e[t])) && (n && (n += " "), n += f2);
  } else for (f2 in e) e[f2] && (n && (n += " "), n += f2);
  return n;
}
function clsx() {
  for (var e, t, f2 = 0, n = "", o2 = arguments.length; f2 < o2; f2++) (e = arguments[f2]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
function serializeArray(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = value.map((v2) => {
    return convertToSerializedForm(v2, metadata, parents);
  });
  parents.delete(value);
  return serialized;
}
function serializeObject(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = Object.fromEntries(
    Object.entries(value).map(([k, v2]) => {
      return [k, convertToSerializedForm(v2, metadata, parents)];
    })
  );
  parents.delete(value);
  return serialized;
}
function convertToSerializedForm(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  const tag = Object.prototype.toString.call(value);
  switch (tag) {
    case "[object Date]": {
      return [PROP_TYPE.Date, value.toISOString()];
    }
    case "[object RegExp]": {
      return [PROP_TYPE.RegExp, value.source];
    }
    case "[object Map]": {
      return [PROP_TYPE.Map, serializeArray(Array.from(value), metadata, parents)];
    }
    case "[object Set]": {
      return [PROP_TYPE.Set, serializeArray(Array.from(value), metadata, parents)];
    }
    case "[object BigInt]": {
      return [PROP_TYPE.BigInt, value.toString()];
    }
    case "[object URL]": {
      return [PROP_TYPE.URL, value.toString()];
    }
    case "[object Array]": {
      return [PROP_TYPE.JSON, serializeArray(value, metadata, parents)];
    }
    case "[object Uint8Array]": {
      return [PROP_TYPE.Uint8Array, Array.from(value)];
    }
    case "[object Uint16Array]": {
      return [PROP_TYPE.Uint16Array, Array.from(value)];
    }
    case "[object Uint32Array]": {
      return [PROP_TYPE.Uint32Array, Array.from(value)];
    }
    default: {
      if (value !== null && typeof value === "object") {
        return [PROP_TYPE.Value, serializeObject(value, metadata, parents)];
      }
      if (value === Infinity) {
        return [PROP_TYPE.Infinity, 1];
      }
      if (value === -Infinity) {
        return [PROP_TYPE.Infinity, -1];
      }
      if (value === void 0) {
        return [PROP_TYPE.Value];
      }
      return [PROP_TYPE.Value, value];
    }
  }
}
function serializeProps(props, metadata) {
  const serialized = JSON.stringify(serializeObject(props, metadata));
  return serialized;
}
function extractDirectives(inputProps, clientDirectives) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {},
    propsWithoutTransitionAttributes: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root") {
        extracted.isPage = true;
      }
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration) {
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      }
      switch (key) {
        case "client:component-path": {
          extracted.hydration.componentUrl = value;
          break;
        }
        case "client:component-export": {
          extracted.hydration.componentExport.value = value;
          break;
        }
        // This is a special prop added to prove that the client hydration method
        // was added statically.
        case "client:component-hydration": {
          break;
        }
        case "client:display-name": {
          break;
        }
        default: {
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!clientDirectives.has(extracted.hydration.directive)) {
            const hydrationMethods = Array.from(clientDirectives.keys()).map((d2) => `client:${d2}`).join(", ");
            throw new Error(
              `Error: invalid hydration directive "${key}". Supported hydration methods: ${hydrationMethods}`
            );
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string") {
            throw new AstroError(MissingMediaQueryDirective);
          }
          break;
        }
      }
    } else {
      extracted.props[key] = value;
      if (!transitionDirectivesToCopyOnIsland.includes(key)) {
        extracted.propsWithoutTransitionAttributes[key] = value;
      }
    }
  }
  for (const sym of Object.getOwnPropertySymbols(inputProps)) {
    extracted.props[sym] = inputProps[sym];
    extracted.propsWithoutTransitionAttributes[sym] = inputProps[sym];
  }
  return extracted;
}
async function generateHydrateScript(scriptOptions, metadata) {
  const { renderer: renderer2, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value) {
    throw new AstroError({
      ...NoMatchingImport,
      message: NoMatchingImport.message(metadata.displayName)
    });
  }
  const island = {
    children: "",
    props: {
      // This is for HMR, probably can avoid it in prod
      uid: astroId
    }
  };
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      island.props[key] = escapeHTML(value);
    }
  }
  island.props["component-url"] = await result.resolve(decodeURI(componentUrl));
  if (renderer2.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(
      decodeURI(renderer2.clientEntrypoint.toString())
    );
    island.props["props"] = escapeHTML(serializeProps(props, metadata));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  let beforeHydrationUrl = await result.resolve("astro:scripts/before-hydration.js");
  if (beforeHydrationUrl.length) {
    island.props["before-hydration-url"] = beforeHydrationUrl;
  }
  island.props["opts"] = escapeHTML(
    JSON.stringify({
      name: metadata.displayName,
      value: metadata.hydrateArgs || ""
    })
  );
  transitionDirectivesToCopyOnIsland.forEach((name) => {
    if (typeof props[name] !== "undefined") {
      island.props[name] = props[name];
    }
  });
  return island;
}
function bitwise(str) {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i2 = 0; i2 < str.length; i2++) {
    const ch = str.charCodeAt(i2);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
function shorthash(text) {
  let num;
  let result = "";
  let integer = bitwise(text);
  const sign = integer < 0 ? "Z" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    result = dictionary[num] + result;
  }
  if (integer > 0) {
    result = dictionary[integer] + result;
  }
  return sign + result;
}
function isAstroComponentFactory(obj) {
  return obj == null ? false : obj.isAstroComponentFactory === true;
}
function isAPropagatingComponent(result, factory) {
  let hint = factory.propagation || "none";
  if (factory.moduleId && result.componentMetadata.has(factory.moduleId) && hint === "none") {
    hint = result.componentMetadata.get(factory.moduleId).propagation;
  }
  return hint === "in-tree" || hint === "self";
}
function isHeadAndContent(obj) {
  return typeof obj === "object" && obj !== null && !!obj[headAndContentSym];
}
function determineIfNeedsHydrationScript(result) {
  if (result._metadata.hasHydrationScript) {
    return false;
  }
  return result._metadata.hasHydrationScript = true;
}
function determinesIfNeedsDirectiveScript(result, directive) {
  if (result._metadata.hasDirectives.has(directive)) {
    return false;
  }
  result._metadata.hasDirectives.add(directive);
  return true;
}
function getDirectiveScriptText(result, directive) {
  const clientDirectives = result.clientDirectives;
  const clientDirective = clientDirectives.get(directive);
  if (!clientDirective) {
    throw new Error(`Unknown directive: ${directive}`);
  }
  return clientDirective;
}
function getPrescripts(result, type, directive) {
  switch (type) {
    case "both":
      return `${ISLAND_STYLES}<script>${getDirectiveScriptText(result, directive)};${astro_island_prebuilt_default}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(result, directive)}<\/script>`;
  }
  return "";
}
function defineScriptVars(vars) {
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `const ${toIdent(key)} = ${JSON.stringify(value)?.replace(
      /<\/script>/g,
      "\\x3C/script>"
    )};
`;
  }
  return markHTMLString(output);
}
function formatList(values) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
function addAttribute(value, key, shouldEscape = true) {
  if (value == null) {
    return "";
  }
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString(clsx(value), shouldEscape);
    if (listValue === "") {
      return "";
    }
    return markHTMLString(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString)) {
    if (Array.isArray(value) && value.length === 2) {
      return markHTMLString(
        ` ${key}="${toAttributeString(`${toStyleString(value[0])};${value[1]}`, shouldEscape)}"`
      );
    }
    if (typeof value === "object") {
      return markHTMLString(` ${key}="${toAttributeString(toStyleString(value), shouldEscape)}"`);
    }
  }
  if (key === "className") {
    return markHTMLString(` class="${toAttributeString(value, shouldEscape)}"`);
  }
  if (typeof value === "string" && value.includes("&") && isHttpUrl(value)) {
    return markHTMLString(` ${key}="${toAttributeString(value, false)}"`);
  }
  if (htmlBooleanAttributes.test(key)) {
    return markHTMLString(value ? ` ${key}` : "");
  }
  if (value === "") {
    return markHTMLString(` ${key}`);
  }
  return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
}
function internalSpreadAttributes(values, shouldEscape = true) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, shouldEscape);
  }
  return markHTMLString(output);
}
function renderElement$1(name, { props: _props, children: children2 = "" }, shouldEscape = true) {
  const { lang: _2, "data-astro-id": astroId, "define:vars": defineVars, ...props } = _props;
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children2 = defineScriptVars(defineVars) + "\n" + children2;
    }
  }
  if ((children2 == null || children2 == "") && voidElementNames.test(name)) {
    return `<${name}${internalSpreadAttributes(props, shouldEscape)}>`;
  }
  return `<${name}${internalSpreadAttributes(props, shouldEscape)}>${children2}</${name}>`;
}
function createBufferedRenderer(destination, renderFunction) {
  return new BufferedRenderer(destination, renderFunction);
}
function promiseWithResolvers() {
  let resolve, reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  return {
    promise,
    resolve,
    reject
  };
}
function isHttpUrl(url) {
  try {
    const parsedUrl = new URL(url);
    return VALID_PROTOCOLS.includes(parsedUrl.protocol);
  } catch {
    return false;
  }
}
function renderAllHeadContent(result) {
  result._metadata.hasRenderedHead = true;
  const styles = Array.from(result.styles).filter(uniqueElements).map(
    (style) => style.props.rel === "stylesheet" ? renderElement$1("link", style) : renderElement$1("style", style)
  );
  result.styles.clear();
  const scripts = Array.from(result.scripts).filter(uniqueElements).map((script) => {
    if (result.userAssetsBase) {
      script.props.src = (result.base === "/" ? "" : result.base) + result.userAssetsBase + script.props.src;
    }
    return renderElement$1("script", script, false);
  });
  const links = Array.from(result.links).filter(uniqueElements).map((link) => renderElement$1("link", link, false));
  let content = styles.join("\n") + links.join("\n") + scripts.join("\n");
  if (result._metadata.extraHead.length > 0) {
    for (const part of result._metadata.extraHead) {
      content += part;
    }
  }
  return markHTMLString(content);
}
function maybeRenderHead() {
  return createRenderInstruction({ type: "maybe-head" });
}
function encodeHexUpperCase(data) {
  let result = "";
  for (let i2 = 0; i2 < data.length; i2++) {
    result += alphabetUpperCase[data[i2] >> 4];
    result += alphabetUpperCase[data[i2] & 15];
  }
  return result;
}
function decodeHex(data) {
  if (data.length % 2 !== 0) {
    throw new Error("Invalid hex string");
  }
  const result = new Uint8Array(data.length / 2);
  for (let i2 = 0; i2 < data.length; i2 += 2) {
    if (!(data[i2] in decodeMap)) {
      throw new Error("Invalid character");
    }
    if (!(data[i2 + 1] in decodeMap)) {
      throw new Error("Invalid character");
    }
    result[i2 / 2] |= decodeMap[data[i2]] << 4;
    result[i2 / 2] |= decodeMap[data[i2 + 1]];
  }
  return result;
}
function encodeBase64(bytes) {
  return encodeBase64_internal(bytes, base64Alphabet, EncodingPadding.Include);
}
function encodeBase64_internal(bytes, alphabet, padding) {
  let result = "";
  for (let i2 = 0; i2 < bytes.byteLength; i2 += 3) {
    let buffer = 0;
    let bufferBitSize = 0;
    for (let j2 = 0; j2 < 3 && i2 + j2 < bytes.byteLength; j2++) {
      buffer = buffer << 8 | bytes[i2 + j2];
      bufferBitSize += 8;
    }
    for (let j2 = 0; j2 < 4; j2++) {
      if (bufferBitSize >= 6) {
        result += alphabet[buffer >> bufferBitSize - 6 & 63];
        bufferBitSize -= 6;
      } else if (bufferBitSize > 0) {
        result += alphabet[buffer << 6 - bufferBitSize & 63];
        bufferBitSize = 0;
      } else if (padding === EncodingPadding.Include) {
        result += "=";
      }
    }
  }
  return result;
}
function decodeBase64(encoded) {
  return decodeBase64_internal(encoded, base64DecodeMap, DecodingPadding.Required);
}
function decodeBase64_internal(encoded, decodeMap2, padding) {
  const result = new Uint8Array(Math.ceil(encoded.length / 4) * 3);
  let totalBytes = 0;
  for (let i2 = 0; i2 < encoded.length; i2 += 4) {
    let chunk = 0;
    let bitsRead = 0;
    for (let j2 = 0; j2 < 4; j2++) {
      if (padding === DecodingPadding.Required && encoded[i2 + j2] === "=") {
        continue;
      }
      if (padding === DecodingPadding.Ignore && (i2 + j2 >= encoded.length || encoded[i2 + j2] === "=")) {
        continue;
      }
      if (j2 > 0 && encoded[i2 + j2 - 1] === "=") {
        throw new Error("Invalid padding");
      }
      if (!(encoded[i2 + j2] in decodeMap2)) {
        throw new Error("Invalid character");
      }
      chunk |= decodeMap2[encoded[i2 + j2]] << (3 - j2) * 6;
      bitsRead += 6;
    }
    if (bitsRead < 24) {
      let unused;
      if (bitsRead === 12) {
        unused = chunk & 65535;
      } else if (bitsRead === 18) {
        unused = chunk & 255;
      } else {
        throw new Error("Invalid padding");
      }
      if (unused !== 0) {
        throw new Error("Invalid padding");
      }
    }
    const byteLength = Math.floor(bitsRead / 8);
    for (let i3 = 0; i3 < byteLength; i3++) {
      result[totalBytes] = chunk >> 16 - i3 * 8 & 255;
      totalBytes++;
    }
  }
  return result.slice(0, totalBytes);
}
async function decodeKey(encoded) {
  const bytes = decodeBase64(encoded);
  return crypto.subtle.importKey("raw", bytes, ALGORITHM, true, ["encrypt", "decrypt"]);
}
async function encryptString(key, raw) {
  const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH / 2));
  const data = encoder$1.encode(raw);
  const buffer = await crypto.subtle.encrypt(
    {
      name: ALGORITHM,
      iv
    },
    key,
    data
  );
  return encodeHexUpperCase(iv) + encodeBase64(new Uint8Array(buffer));
}
async function decryptString(key, encoded) {
  const iv = decodeHex(encoded.slice(0, IV_LENGTH));
  const dataArray = decodeBase64(encoded.slice(IV_LENGTH));
  const decryptedBuffer = await crypto.subtle.decrypt(
    {
      name: ALGORITHM,
      iv
    },
    key,
    dataArray
  );
  const decryptedString = decoder$1.decode(decryptedBuffer);
  return decryptedString;
}
function isRenderTemplateResult(obj) {
  return typeof obj === "object" && obj !== null && !!obj[renderTemplateResultSym];
}
function renderTemplate(htmlParts, ...expressions) {
  return new RenderTemplateResult(htmlParts, expressions);
}
function isSlotString(str) {
  return !!str[slotString];
}
function renderSlot(result, slotted, fallback) {
  if (!slotted && fallback) {
    return renderSlot(result, fallback);
  }
  return {
    async render(destination) {
      await renderChild(destination, typeof slotted === "function" ? slotted(result) : slotted);
    }
  };
}
async function renderSlotToString(result, slotted, fallback) {
  let content = "";
  let instructions = null;
  const temporaryDestination = {
    write(chunk) {
      if (chunk instanceof SlotString) {
        content += chunk;
        if (chunk.instructions) {
          instructions ??= [];
          instructions.push(...chunk.instructions);
        }
      } else if (chunk instanceof Response) return;
      else if (typeof chunk === "object" && "type" in chunk && typeof chunk.type === "string") {
        if (instructions === null) {
          instructions = [];
        }
        instructions.push(chunk);
      } else {
        content += chunkToString(result, chunk);
      }
    }
  };
  const renderInstance = renderSlot(result, slotted, fallback);
  await renderInstance.render(temporaryDestination);
  return markHTMLString(new SlotString(content, instructions));
}
async function renderSlots(result, slots = {}) {
  let slotInstructions = null;
  let children2 = {};
  if (slots) {
    await Promise.all(
      Object.entries(slots).map(
        ([key, value]) => renderSlotToString(result, value).then((output) => {
          if (output.instructions) {
            if (slotInstructions === null) {
              slotInstructions = [];
            }
            slotInstructions.push(...output.instructions);
          }
          children2[key] = output;
        })
      )
    );
  }
  return { slotInstructions, children: children2 };
}
function createSlotValueFromString(content) {
  return function() {
    return renderTemplate`${unescapeHTML(content)}`;
  };
}
function containsServerDirective(props) {
  return "server:component-directive" in props;
}
function safeJsonStringify(obj) {
  return JSON.stringify(obj).replace(SCRIPT_RE, SCRIPT_REPLACER).replace(COMMENT_RE, COMMENT_REPLACER);
}
function createSearchParams(componentExport, encryptedProps, slots) {
  const params = new URLSearchParams();
  params.set("e", componentExport);
  params.set("p", encryptedProps);
  params.set("s", slots);
  return params;
}
function isWithinURLLimit(pathname, params) {
  const url = pathname + "?" + params.toString();
  const chars = url.length;
  return chars < 2048;
}
function renderServerIsland(result, _displayName, props, slots) {
  return {
    async render(destination) {
      const componentPath = props["server:component-path"];
      const componentExport = props["server:component-export"];
      const componentId = result.serverIslandNameMap.get(componentPath);
      if (!componentId) {
        throw new Error(`Could not find server component name`);
      }
      for (const key2 of Object.keys(props)) {
        if (internalProps.has(key2)) {
          delete props[key2];
        }
      }
      destination.write(createRenderInstruction({ type: "server-island-runtime" }));
      destination.write("<!--[if astro]>server-island-start<![endif]-->");
      const renderedSlots = {};
      for (const name in slots) {
        if (name !== "fallback") {
          const content = await renderSlotToString(result, slots[name]);
          renderedSlots[name] = content.toString();
        } else {
          await renderChild(destination, slots.fallback(result));
        }
      }
      const key = await result.key;
      const propsEncrypted = Object.keys(props).length === 0 ? "" : await encryptString(key, JSON.stringify(props));
      const hostId = crypto.randomUUID();
      const slash2 = result.base.endsWith("/") ? "" : "/";
      let serverIslandUrl = `${result.base}${slash2}_server-islands/${componentId}${result.trailingSlash === "always" ? "/" : ""}`;
      const potentialSearchParams = createSearchParams(
        componentExport,
        propsEncrypted,
        safeJsonStringify(renderedSlots)
      );
      const useGETRequest = isWithinURLLimit(serverIslandUrl, potentialSearchParams);
      if (useGETRequest) {
        serverIslandUrl += "?" + potentialSearchParams.toString();
        destination.write(
          `<link rel="preload" as="fetch" href="${serverIslandUrl}" crossorigin="anonymous">`
        );
      }
      destination.write(`<script type="module" data-astro-rerun data-island-id="${hostId}">${useGETRequest ? (
        // GET request
        `let response = await fetch('${serverIslandUrl}');`
      ) : (
        // POST request
        `let data = {
	componentExport: ${safeJsonStringify(componentExport)},
	encryptedProps: ${safeJsonStringify(propsEncrypted)},
	slots: ${safeJsonStringify(renderedSlots)},
};
let response = await fetch('${serverIslandUrl}', {
	method: 'POST',
	body: JSON.stringify(data),
});`
      )}
replaceServerIsland('${hostId}', response);<\/script>`);
    }
  };
}
function stringifyChunk(result, chunk) {
  if (isRenderInstruction(chunk)) {
    const instruction = chunk;
    switch (instruction.type) {
      case "directive": {
        const { hydration } = instruction;
        let needsHydrationScript = hydration && determineIfNeedsHydrationScript(result);
        let needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript(result, hydration.directive);
        let prescriptType = needsHydrationScript ? "both" : needsDirectiveScript ? "directive" : null;
        if (prescriptType) {
          let prescripts = getPrescripts(result, prescriptType, hydration.directive);
          return markHTMLString(prescripts);
        } else {
          return "";
        }
      }
      case "head": {
        if (result._metadata.hasRenderedHead || result.partial) {
          return "";
        }
        return renderAllHeadContent(result);
      }
      case "maybe-head": {
        if (result._metadata.hasRenderedHead || result._metadata.headInTree || result.partial) {
          return "";
        }
        return renderAllHeadContent(result);
      }
      case "renderer-hydration-script": {
        const { rendererSpecificHydrationScripts } = result._metadata;
        const { rendererName } = instruction;
        if (!rendererSpecificHydrationScripts.has(rendererName)) {
          rendererSpecificHydrationScripts.add(rendererName);
          return instruction.render();
        }
        return "";
      }
      case "server-island-runtime": {
        if (result._metadata.hasRenderedServerIslandRuntime) {
          return "";
        }
        result._metadata.hasRenderedServerIslandRuntime = true;
        return renderServerIslandRuntime();
      }
      default: {
        throw new Error(`Unknown chunk type: ${chunk.type}`);
      }
    }
  } else if (chunk instanceof Response) {
    return "";
  } else if (isSlotString(chunk)) {
    let out = "";
    const c2 = chunk;
    if (c2.instructions) {
      for (const instr of c2.instructions) {
        out += stringifyChunk(result, instr);
      }
    }
    out += chunk.toString();
    return out;
  }
  return chunk.toString();
}
function chunkToString(result, chunk) {
  if (ArrayBuffer.isView(chunk)) {
    return decoder.decode(chunk);
  } else {
    return stringifyChunk(result, chunk);
  }
}
function chunkToByteArray(result, chunk) {
  if (ArrayBuffer.isView(chunk)) {
    return chunk;
  } else {
    const stringified = stringifyChunk(result, chunk);
    return encoder.encode(stringified.toString());
  }
}
function isRenderInstance(obj) {
  return !!obj && typeof obj === "object" && "render" in obj && typeof obj.render === "function";
}
function renderChild(destination, child) {
  if (isPromise(child)) {
    return child.then((x2) => renderChild(destination, x2));
  }
  if (child instanceof SlotString) {
    destination.write(child);
    return;
  }
  if (isHTMLString(child)) {
    destination.write(child);
    return;
  }
  if (Array.isArray(child)) {
    return renderArray(destination, child);
  }
  if (typeof child === "function") {
    return renderChild(destination, child());
  }
  if (!child && child !== 0) {
    return;
  }
  if (typeof child === "string") {
    destination.write(markHTMLString(escapeHTML(child)));
    return;
  }
  if (isRenderInstance(child)) {
    return child.render(destination);
  }
  if (isRenderTemplateResult(child)) {
    return child.render(destination);
  }
  if (isAstroComponentInstance(child)) {
    return child.render(destination);
  }
  if (ArrayBuffer.isView(child)) {
    destination.write(child);
    return;
  }
  if (typeof child === "object" && (Symbol.asyncIterator in child || Symbol.iterator in child)) {
    if (Symbol.asyncIterator in child) {
      return renderAsyncIterable(destination, child);
    }
    return renderIterable(destination, child);
  }
  destination.write(child);
}
function renderArray(destination, children2) {
  const flushers = children2.map((c2) => {
    return createBufferedRenderer(destination, (bufferDestination) => {
      return renderChild(bufferDestination, c2);
    });
  });
  const iterator = flushers[Symbol.iterator]();
  const iterate = /* @__PURE__ */ __name(() => {
    for (; ; ) {
      const { value: flusher, done } = iterator.next();
      if (done) {
        break;
      }
      const result = flusher.flush();
      if (isPromise(result)) {
        return result.then(iterate);
      }
    }
  }, "iterate");
  return iterate();
}
function renderIterable(destination, children2) {
  const iterator = children2[Symbol.iterator]();
  const iterate = /* @__PURE__ */ __name(() => {
    for (; ; ) {
      const { value, done } = iterator.next();
      if (done) {
        break;
      }
      const result = renderChild(destination, value);
      if (isPromise(result)) {
        return result.then(iterate);
      }
    }
  }, "iterate");
  return iterate();
}
async function renderAsyncIterable(destination, children2) {
  for await (const value of children2) {
    await renderChild(destination, value);
  }
}
function validateComponentProps(props, displayName) {
  if (props != null) {
    for (const prop of Object.keys(props)) {
      if (prop.startsWith("client:")) {
        console.warn(
          `You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
      }
    }
  }
}
function createAstroComponentInstance(result, displayName, factory, props, slots = {}) {
  validateComponentProps(props, displayName);
  const instance = new AstroComponentInstance(result, props, slots, factory);
  if (isAPropagatingComponent(result, factory)) {
    result._metadata.propagators.add(instance);
  }
  return instance;
}
function isAstroComponentInstance(obj) {
  return typeof obj === "object" && obj !== null && !!obj[astroComponentInstanceSym];
}
async function renderToString2(result, componentFactory, props, children2, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children2,
    route
  );
  if (templateResult instanceof Response) return templateResult;
  let str = "";
  let renderedFirstPageChunk = false;
  if (isPage) {
    await bufferHeadContent(result);
  }
  const destination = {
    write(chunk) {
      if (isPage && !renderedFirstPageChunk) {
        renderedFirstPageChunk = true;
        if (!result.partial && !DOCTYPE_EXP.test(String(chunk))) {
          const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
          str += doctype;
        }
      }
      if (chunk instanceof Response) return;
      str += chunkToString(result, chunk);
    }
  };
  await templateResult.render(destination);
  return str;
}
async function renderToReadableStream(result, componentFactory, props, children2, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children2,
    route
  );
  if (templateResult instanceof Response) return templateResult;
  let renderedFirstPageChunk = false;
  if (isPage) {
    await bufferHeadContent(result);
  }
  return new ReadableStream({
    start(controller) {
      const destination = {
        write(chunk) {
          if (isPage && !renderedFirstPageChunk) {
            renderedFirstPageChunk = true;
            if (!result.partial && !DOCTYPE_EXP.test(String(chunk))) {
              const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
              controller.enqueue(encoder.encode(doctype));
            }
          }
          if (chunk instanceof Response) {
            throw new AstroError({
              ...ResponseSentError
            });
          }
          const bytes = chunkToByteArray(result, chunk);
          controller.enqueue(bytes);
        }
      };
      (async () => {
        try {
          await templateResult.render(destination);
          controller.close();
        } catch (e) {
          if (AstroError.is(e) && !e.loc) {
            e.setLocation({
              file: route?.component
            });
          }
          setTimeout(() => controller.error(e), 0);
        }
      })();
    },
    cancel() {
      result.cancelled = true;
    }
  });
}
async function callComponentAsTemplateResultOrResponse(result, componentFactory, props, children2, route) {
  const factoryResult = await componentFactory(result, props, children2);
  if (factoryResult instanceof Response) {
    return factoryResult;
  } else if (isHeadAndContent(factoryResult)) {
    if (!isRenderTemplateResult(factoryResult.content)) {
      throw new AstroError({
        ...OnlyResponseCanBeReturned,
        message: OnlyResponseCanBeReturned.message(
          route?.route,
          typeof factoryResult
        ),
        location: {
          file: route?.component
        }
      });
    }
    return factoryResult.content;
  } else if (!isRenderTemplateResult(factoryResult)) {
    throw new AstroError({
      ...OnlyResponseCanBeReturned,
      message: OnlyResponseCanBeReturned.message(route?.route, typeof factoryResult),
      location: {
        file: route?.component
      }
    });
  }
  return factoryResult;
}
async function bufferHeadContent(result) {
  const iterator = result._metadata.propagators.values();
  while (true) {
    const { value, done } = iterator.next();
    if (done) {
      break;
    }
    const returnValue = await value.init(result);
    if (isHeadAndContent(returnValue)) {
      result._metadata.extraHead.push(returnValue.head);
    }
  }
}
async function renderToAsyncIterable(result, componentFactory, props, children2, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children2,
    route
  );
  if (templateResult instanceof Response) return templateResult;
  let renderedFirstPageChunk = false;
  if (isPage) {
    await bufferHeadContent(result);
  }
  let error5 = null;
  let next = null;
  const buffer = [];
  let renderingComplete = false;
  const iterator = {
    async next() {
      if (result.cancelled) return { done: true, value: void 0 };
      if (next !== null) {
        await next.promise;
      } else if (!renderingComplete && !buffer.length) {
        next = promiseWithResolvers();
        await next.promise;
      }
      if (!renderingComplete) {
        next = promiseWithResolvers();
      }
      if (error5) {
        throw error5;
      }
      let length = 0;
      for (let i2 = 0, len = buffer.length; i2 < len; i2++) {
        length += buffer[i2].length;
      }
      let mergedArray = new Uint8Array(length);
      let offset = 0;
      for (let i2 = 0, len = buffer.length; i2 < len; i2++) {
        const item = buffer[i2];
        mergedArray.set(item, offset);
        offset += item.length;
      }
      buffer.length = 0;
      const returnValue = {
        // The iterator is done when rendering has finished
        // and there are no more chunks to return.
        done: length === 0 && renderingComplete,
        value: mergedArray
      };
      return returnValue;
    },
    async return() {
      result.cancelled = true;
      return { done: true, value: void 0 };
    }
  };
  const destination = {
    write(chunk) {
      if (isPage && !renderedFirstPageChunk) {
        renderedFirstPageChunk = true;
        if (!result.partial && !DOCTYPE_EXP.test(String(chunk))) {
          const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
          buffer.push(encoder.encode(doctype));
        }
      }
      if (chunk instanceof Response) {
        throw new AstroError(ResponseSentError);
      }
      const bytes = chunkToByteArray(result, chunk);
      if (bytes.length > 0) {
        buffer.push(bytes);
        next?.resolve();
      } else if (buffer.length > 0) {
        next?.resolve();
      }
    }
  };
  const renderResult = toPromise(() => templateResult.render(destination));
  renderResult.catch((err) => {
    error5 = err;
  }).finally(() => {
    renderingComplete = true;
    next?.resolve();
  });
  return {
    [Symbol.asyncIterator]() {
      return iterator;
    }
  };
}
function toPromise(fn) {
  try {
    const result = fn();
    return isPromise(result) ? result : Promise.resolve(result);
  } catch (err) {
    return Promise.reject(err);
  }
}
function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(
    `<${name}${attrHTML}>${await renderSlotToString(result, slots?.default)}</${name}>`
  );
}
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName) return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}
function guessRenderers(componentUrl) {
  const extname = componentUrl?.split(".").pop();
  switch (extname) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid-js", "@astrojs/vue (jsx)"];
    case void 0:
    default:
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid-js",
        "@astrojs/vue",
        "@astrojs/svelte"
      ];
  }
}
function isFragmentComponent(Component) {
  return Component === Fragment;
}
function isHTMLComponent(Component) {
  return Component && Component["astro:html"] === true;
}
function removeStaticAstroSlot(html, supportsAstroStaticSlot = true) {
  const exp = supportsAstroStaticSlot ? ASTRO_STATIC_SLOT_EXP : ASTRO_SLOT_EXP;
  return html.replace(exp, "");
}
async function renderFrameworkComponent(result, displayName, Component, _props, slots = {}) {
  if (!Component && "client:only" in _props === false) {
    throw new Error(
      `Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`
    );
  }
  const { renderers: renderers2, clientDirectives } = result;
  const metadata = {
    astroStaticSlot: true,
    displayName
  };
  const { hydration, isPage, props, propsWithoutTransitionAttributes } = extractDirectives(
    _props,
    clientDirectives
  );
  let html = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers(metadata.componentUrl);
  const validRenderers = renderers2.filter((r2) => r2.name !== "astro:jsx");
  const { children: children2, slotInstructions } = await renderSlots(result, slots);
  let renderer2;
  if (metadata.hydrate !== "only") {
    let isTagged = false;
    try {
      isTagged = Component && Component[Renderer];
    } catch {
    }
    if (isTagged) {
      const rendererName = Component[Renderer];
      renderer2 = renderers2.find(({ name }) => name === rendererName);
    }
    if (!renderer2) {
      let error5;
      for (const r2 of renderers2) {
        try {
          if (await r2.ssr.check.call({ result }, Component, props, children2)) {
            renderer2 = r2;
            break;
          }
        } catch (e) {
          error5 ??= e;
        }
      }
      if (!renderer2 && error5) {
        throw error5;
      }
    }
    if (!renderer2 && typeof HTMLElement === "function" && componentIsHTMLElement(Component)) {
      const output = await renderHTMLElement(
        result,
        Component,
        _props,
        slots
      );
      return {
        render(destination) {
          destination.write(output);
        }
      };
    }
  } else {
    if (metadata.hydrateArgs) {
      const rendererName = rendererAliases.has(metadata.hydrateArgs) ? rendererAliases.get(metadata.hydrateArgs) : metadata.hydrateArgs;
      if (clientOnlyValues.has(rendererName)) {
        renderer2 = renderers2.find(
          ({ name }) => name === `@astrojs/${rendererName}` || name === rendererName
        );
      }
    }
    if (!renderer2 && validRenderers.length === 1) {
      renderer2 = validRenderers[0];
    }
    if (!renderer2) {
      const extname = metadata.componentUrl?.split(".").pop();
      renderer2 = renderers2.find(({ name }) => name === `@astrojs/${extname}` || name === extname);
    }
  }
  if (!renderer2) {
    if (metadata.hydrate === "only") {
      const rendererName = rendererAliases.has(metadata.hydrateArgs) ? rendererAliases.get(metadata.hydrateArgs) : metadata.hydrateArgs;
      if (clientOnlyValues.has(rendererName)) {
        const plural = validRenderers.length > 1;
        throw new AstroError({
          ...NoMatchingRenderer,
          message: NoMatchingRenderer.message(
            metadata.displayName,
            metadata?.componentUrl?.split(".").pop(),
            plural,
            validRenderers.length
          ),
          hint: NoMatchingRenderer.hint(
            formatList(probableRendererNames.map((r2) => "`" + r2 + "`"))
          )
        });
      } else {
        throw new AstroError({
          ...NoClientOnlyHint,
          message: NoClientOnlyHint.message(metadata.displayName),
          hint: NoClientOnlyHint.hint(
            probableRendererNames.map((r2) => r2.replace("@astrojs/", "")).join("|")
          )
        });
      }
    } else if (typeof Component !== "string") {
      const matchingRenderers = validRenderers.filter(
        (r2) => probableRendererNames.includes(r2.name)
      );
      const plural = validRenderers.length > 1;
      if (matchingRenderers.length === 0) {
        throw new AstroError({
          ...NoMatchingRenderer,
          message: NoMatchingRenderer.message(
            metadata.displayName,
            metadata?.componentUrl?.split(".").pop(),
            plural,
            validRenderers.length
          ),
          hint: NoMatchingRenderer.hint(
            formatList(probableRendererNames.map((r2) => "`" + r2 + "`"))
          )
        });
      } else if (matchingRenderers.length === 1) {
        renderer2 = matchingRenderers[0];
        ({ html, attrs } = await renderer2.ssr.renderToStaticMarkup.call(
          { result },
          Component,
          propsWithoutTransitionAttributes,
          children2,
          metadata
        ));
      } else {
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      }
    }
  } else {
    if (metadata.hydrate === "only") {
      html = await renderSlotToString(result, slots?.fallback);
    } else {
      performance.now();
      ({ html, attrs } = await renderer2.ssr.renderToStaticMarkup.call(
        { result },
        Component,
        propsWithoutTransitionAttributes,
        children2,
        metadata
      ));
    }
  }
  if (!html && typeof Component === "string") {
    const Tag = sanitizeElementName(Component);
    const childSlots = Object.values(children2).join("");
    const renderTemplateResult = renderTemplate`<${Tag}${internalSpreadAttributes(
      props
    )}${markHTMLString(
      childSlots === "" && voidElementNames.test(Tag) ? `/>` : `>${childSlots}</${Tag}>`
    )}`;
    html = "";
    const destination = {
      write(chunk) {
        if (chunk instanceof Response) return;
        html += chunkToString(result, chunk);
      }
    };
    await renderTemplateResult.render(destination);
  }
  if (!hydration) {
    return {
      render(destination) {
        if (slotInstructions) {
          for (const instruction of slotInstructions) {
            destination.write(instruction);
          }
        }
        if (isPage || renderer2?.name === "astro:jsx") {
          destination.write(html);
        } else if (html && html.length > 0) {
          destination.write(
            markHTMLString(removeStaticAstroSlot(html, renderer2?.ssr?.supportsAstroStaticSlot))
          );
        }
      }
    };
  }
  const astroId = shorthash(
    `<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html}
${serializeProps(
      props,
      metadata
    )}`
  );
  const island = await generateHydrateScript(
    { renderer: renderer2, result, astroId, props, attrs },
    metadata
  );
  let unrenderedSlots = [];
  if (html) {
    if (Object.keys(children2).length > 0) {
      for (const key of Object.keys(children2)) {
        let tagName = renderer2?.ssr?.supportsAstroStaticSlot ? !!metadata.hydrate ? "astro-slot" : "astro-static-slot" : "astro-slot";
        let expectedHTML = key === "default" ? `<${tagName}>` : `<${tagName} name="${key}">`;
        if (!html.includes(expectedHTML)) {
          unrenderedSlots.push(key);
        }
      }
    }
  } else {
    unrenderedSlots = Object.keys(children2);
  }
  const template2 = unrenderedSlots.length > 0 ? unrenderedSlots.map(
    (key) => `<template data-astro-template${key !== "default" ? `="${key}"` : ""}>${children2[key]}</template>`
  ).join("") : "";
  island.children = `${html ?? ""}${template2}`;
  if (island.children) {
    island.props["await-children"] = "";
    island.children += `<!--astro:end-->`;
  }
  return {
    render(destination) {
      if (slotInstructions) {
        for (const instruction of slotInstructions) {
          destination.write(instruction);
        }
      }
      destination.write(createRenderInstruction({ type: "directive", hydration }));
      if (hydration.directive !== "only" && renderer2?.ssr.renderHydrationScript) {
        destination.write(
          createRenderInstruction({
            type: "renderer-hydration-script",
            rendererName: renderer2.name,
            render: renderer2.ssr.renderHydrationScript
          })
        );
      }
      const renderedElement = renderElement$1("astro-island", island, false);
      destination.write(markHTMLString(renderedElement));
    }
  };
}
function sanitizeElementName(tag) {
  const unsafe = /[&<>'"\s]+/;
  if (!unsafe.test(tag)) return tag;
  return tag.trim().split(unsafe)[0].trim();
}
async function renderFragmentComponent(result, slots = {}) {
  const children2 = await renderSlotToString(result, slots?.default);
  return {
    render(destination) {
      if (children2 == null) return;
      destination.write(children2);
    }
  };
}
async function renderHTMLComponent(result, Component, _props, slots = {}) {
  const { slotInstructions, children: children2 } = await renderSlots(result, slots);
  const html = Component({ slots: children2 });
  const hydrationHtml = slotInstructions ? slotInstructions.map((instr) => chunkToString(result, instr)).join("") : "";
  return {
    render(destination) {
      destination.write(markHTMLString(hydrationHtml + html));
    }
  };
}
function renderAstroComponent(result, displayName, Component, props, slots = {}) {
  if (containsServerDirective(props)) {
    return renderServerIsland(result, displayName, props, slots);
  }
  const instance = createAstroComponentInstance(result, displayName, Component, props, slots);
  return {
    render(destination) {
      return instance.render(destination);
    }
  };
}
function renderComponent(result, displayName, Component, props, slots = {}) {
  if (isPromise(Component)) {
    return Component.catch(handleCancellation).then((x2) => {
      return renderComponent(result, displayName, x2, props, slots);
    });
  }
  if (isFragmentComponent(Component)) {
    return renderFragmentComponent(result, slots).catch(handleCancellation);
  }
  props = normalizeProps(props);
  if (isHTMLComponent(Component)) {
    return renderHTMLComponent(result, Component, props, slots).catch(handleCancellation);
  }
  if (isAstroComponentFactory(Component)) {
    return renderAstroComponent(result, displayName, Component, props, slots);
  }
  return renderFrameworkComponent(result, displayName, Component, props, slots).catch(
    handleCancellation
  );
  function handleCancellation(e) {
    if (result.cancelled)
      return {
        render() {
        }
      };
    throw e;
  }
  __name(handleCancellation, "handleCancellation");
}
function normalizeProps(props) {
  if (props["class:list"] !== void 0) {
    const value = props["class:list"];
    delete props["class:list"];
    props["class"] = clsx(props["class"], value);
    if (props["class"] === "") {
      delete props["class"];
    }
  }
  return props;
}
async function renderComponentToString(result, displayName, Component, props, slots = {}, isPage = false, route) {
  let str = "";
  let renderedFirstPageChunk = false;
  let head = "";
  if (isPage && !result.partial && nonAstroPageNeedsHeadInjection(Component)) {
    head += chunkToString(result, maybeRenderHead());
  }
  try {
    const destination = {
      write(chunk) {
        if (isPage && !result.partial && !renderedFirstPageChunk) {
          renderedFirstPageChunk = true;
          if (!/<!doctype html/i.test(String(chunk))) {
            const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
            str += doctype + head;
          }
        }
        if (chunk instanceof Response) return;
        str += chunkToString(result, chunk);
      }
    };
    const renderInstance = await renderComponent(result, displayName, Component, props, slots);
    await renderInstance.render(destination);
  } catch (e) {
    if (AstroError.is(e) && !e.loc) {
      e.setLocation({
        file: route?.component
      });
    }
    throw e;
  }
  return str;
}
function nonAstroPageNeedsHeadInjection(pageComponent) {
  return !!pageComponent?.[needsHeadRenderingSymbol];
}
async function renderJSX(result, vnode) {
  switch (true) {
    case vnode instanceof HTMLString:
      if (vnode.toString().trim() === "") {
        return "";
      }
      return vnode;
    case typeof vnode === "string":
      return markHTMLString(escapeHTML(vnode));
    case typeof vnode === "function":
      return vnode;
    case (!vnode && vnode !== 0):
      return "";
    case Array.isArray(vnode):
      return markHTMLString(
        (await Promise.all(vnode.map((v2) => renderJSX(result, v2)))).join("")
      );
  }
  return renderJSXVNode(result, vnode);
}
async function renderJSXVNode(result, vnode) {
  if (isVNode(vnode)) {
    switch (true) {
      case !vnode.type: {
        throw new Error(`Unable to render ${result.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      }
      case vnode.type === Symbol.for("astro:fragment"):
        return renderJSX(result, vnode.props.children);
      case vnode.type.isAstroComponentFactory: {
        let props = {};
        let slots = {};
        for (const [key, value] of Object.entries(vnode.props ?? {})) {
          if (key === "children" || value && typeof value === "object" && value["$$slot"]) {
            slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
          } else {
            props[key] = value;
          }
        }
        const str = await renderToString2(result, vnode.type, props, slots);
        if (str instanceof Response) {
          throw str;
        }
        const html = markHTMLString(str);
        return html;
      }
      case (!vnode.type && vnode.type !== 0):
        return "";
      case (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder):
        return markHTMLString(await renderElement(result, vnode.type, vnode.props ?? {}));
    }
    if (vnode.type) {
      let extractSlots2 = /* @__PURE__ */ __name(function(child) {
        if (Array.isArray(child)) {
          return child.map((c2) => extractSlots2(c2));
        }
        if (!isVNode(child)) {
          _slots.default.push(child);
          return;
        }
        if ("slot" in child.props) {
          _slots[child.props.slot] = [..._slots[child.props.slot] ?? [], child];
          delete child.props.slot;
          return;
        }
        _slots.default.push(child);
      }, "extractSlots2");
      if (typeof vnode.type === "function" && vnode.props["server:root"]) {
        const output2 = await vnode.type(vnode.props ?? {});
        return await renderJSX(result, output2);
      }
      if (typeof vnode.type === "function") {
        if (vnode.props[hasTriedRenderComponentSymbol]) {
          delete vnode.props[hasTriedRenderComponentSymbol];
          const output2 = await vnode.type(vnode.props ?? {});
          if (output2?.[AstroJSX] || !output2) {
            return await renderJSXVNode(result, output2);
          } else {
            return;
          }
        } else {
          vnode.props[hasTriedRenderComponentSymbol] = true;
        }
      }
      const { children: children2 = null, ...props } = vnode.props ?? {};
      const _slots = {
        default: []
      };
      extractSlots2(children2);
      for (const [key, value] of Object.entries(props)) {
        if (value?.["$$slot"]) {
          _slots[key] = value;
          delete props[key];
        }
      }
      const slotPromises = [];
      const slots = {};
      for (const [key, value] of Object.entries(_slots)) {
        slotPromises.push(
          renderJSX(result, value).then((output2) => {
            if (output2.toString().trim().length === 0) return;
            slots[key] = () => output2;
          })
        );
      }
      await Promise.all(slotPromises);
      let output;
      if (vnode.type === ClientOnlyPlaceholder && vnode.props["client:only"]) {
        output = await renderComponentToString(
          result,
          vnode.props["client:display-name"] ?? "",
          null,
          props,
          slots
        );
      } else {
        output = await renderComponentToString(
          result,
          typeof vnode.type === "function" ? vnode.type.name : vnode.type,
          vnode.type,
          props,
          slots
        );
      }
      return markHTMLString(output);
    }
  }
  return markHTMLString(`${vnode}`);
}
async function renderElement(result, tag, { children: children2, ...props }) {
  return markHTMLString(
    `<${tag}${spreadAttributes(props)}${markHTMLString(
      (children2 == null || children2 == "") && voidElementNames.test(tag) ? `/>` : `>${children2 == null ? "" : await renderJSX(result, prerenderElementChildren(tag, children2))}</${tag}>`
    )}`
  );
}
function prerenderElementChildren(tag, children2) {
  if (typeof children2 === "string" && (tag === "style" || tag === "script")) {
    return markHTMLString(children2);
  } else {
    return children2;
  }
}
async function renderPage(result, componentFactory, props, children2, streaming, route) {
  if (!isAstroComponentFactory(componentFactory)) {
    result._metadata.headInTree = result.componentMetadata.get(componentFactory.moduleId)?.containsHead ?? false;
    const pageProps = { ...props ?? {}, "server:root": true };
    const str = await renderComponentToString(
      result,
      componentFactory.name,
      componentFactory,
      pageProps,
      {},
      true,
      route
    );
    const bytes = encoder.encode(str);
    return new Response(bytes, {
      headers: new Headers([
        ["Content-Type", "text/html"],
        ["Content-Length", bytes.byteLength.toString()]
      ])
    });
  }
  result._metadata.headInTree = result.componentMetadata.get(componentFactory.moduleId)?.containsHead ?? false;
  let body;
  if (streaming) {
    if (isNode && !isDeno) {
      const nodeBody = await renderToAsyncIterable(
        result,
        componentFactory,
        props,
        children2,
        true,
        route
      );
      body = nodeBody;
    } else {
      body = await renderToReadableStream(result, componentFactory, props, children2, true, route);
    }
  } else {
    body = await renderToString2(result, componentFactory, props, children2, true, route);
  }
  if (body instanceof Response) return body;
  const init2 = result.response;
  const headers = new Headers(init2.headers);
  if (!streaming && typeof body === "string") {
    body = encoder.encode(body);
    headers.set("Content-Length", body.byteLength.toString());
  }
  let status = init2.status;
  let statusText = init2.statusText;
  if (route?.route === "/404") {
    status = 404;
    if (statusText === "OK") {
      statusText = "Not Found";
    }
  } else if (route?.route === "/500") {
    status = 500;
    if (statusText === "OK") {
      statusText = "Internal Server Error";
    }
  }
  if (status) {
    return new Response(body, { ...init2, headers, status, statusText });
  } else {
    return new Response(body, { ...init2, headers });
  }
}
function requireCssesc() {
  if (hasRequiredCssesc) return cssesc_1;
  hasRequiredCssesc = 1;
  var object = {};
  var hasOwnProperty = object.hasOwnProperty;
  var merge = /* @__PURE__ */ __name(function merge2(options, defaults) {
    if (!options) {
      return defaults;
    }
    var result = {};
    for (var key in defaults) {
      result[key] = hasOwnProperty.call(options, key) ? options[key] : defaults[key];
    }
    return result;
  }, "merge");
  var regexAnySingleEscape = /[ -,\.\/:-@\[-\^`\{-~]/;
  var regexSingleEscape = /[ -,\.\/:-@\[\]\^`\{-~]/;
  var regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;
  var cssesc = /* @__PURE__ */ __name(function cssesc2(string, options) {
    options = merge(options, cssesc2.options);
    if (options.quotes != "single" && options.quotes != "double") {
      options.quotes = "single";
    }
    var quote = options.quotes == "double" ? '"' : "'";
    var isIdentifier = options.isIdentifier;
    var firstChar = string.charAt(0);
    var output = "";
    var counter = 0;
    var length = string.length;
    while (counter < length) {
      var character = string.charAt(counter++);
      var codePoint = character.charCodeAt();
      var value = void 0;
      if (codePoint < 32 || codePoint > 126) {
        if (codePoint >= 55296 && codePoint <= 56319 && counter < length) {
          var extra = string.charCodeAt(counter++);
          if ((extra & 64512) == 56320) {
            codePoint = ((codePoint & 1023) << 10) + (extra & 1023) + 65536;
          } else {
            counter--;
          }
        }
        value = "\\" + codePoint.toString(16).toUpperCase() + " ";
      } else {
        if (options.escapeEverything) {
          if (regexAnySingleEscape.test(character)) {
            value = "\\" + character;
          } else {
            value = "\\" + codePoint.toString(16).toUpperCase() + " ";
          }
        } else if (/[\t\n\f\r\x0B]/.test(character)) {
          value = "\\" + codePoint.toString(16).toUpperCase() + " ";
        } else if (character == "\\" || !isIdentifier && (character == '"' && quote == character || character == "'" && quote == character) || isIdentifier && regexSingleEscape.test(character)) {
          value = "\\" + character;
        } else {
          value = character;
        }
      }
      output += value;
    }
    if (isIdentifier) {
      if (/^-[-\d]/.test(output)) {
        output = "\\-" + output.slice(1);
      } else if (/\d/.test(firstChar)) {
        output = "\\3" + firstChar + " " + output.slice(1);
      }
    }
    output = output.replace(regexExcessiveSpaces, function($0, $1, $2) {
      if ($1 && $1.length % 2) {
        return $0;
      }
      return ($1 || "") + $2;
    });
    if (!isIdentifier && options.wrap) {
      return quote + output + quote;
    }
    return output;
  }, "cssesc");
  cssesc.options = {
    "escapeEverything": false,
    "isIdentifier": false,
    "quotes": "single",
    "wrap": false
  };
  cssesc.version = "3.0.0";
  cssesc_1 = cssesc;
  return cssesc_1;
}
function spreadAttributes(values = {}, _name, { class: scopedClassName } = {}) {
  let output = "";
  if (scopedClassName) {
    if (typeof values.class !== "undefined") {
      values.class += ` ${scopedClassName}`;
    } else if (typeof values["class:list"] !== "undefined") {
      values["class:list"] = [values["class:list"], scopedClassName];
    } else {
      values.class = scopedClassName;
    }
  }
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, true);
  }
  return markHTMLString(output);
}
var ASTRO_VERSION, REROUTE_DIRECTIVE_HEADER, REWRITE_DIRECTIVE_HEADER_KEY, REWRITE_DIRECTIVE_HEADER_VALUE, NOOP_MIDDLEWARE_HEADER, ROUTE_TYPE_HEADER, DEFAULT_404_COMPONENT, REDIRECT_STATUS_CODES, REROUTABLE_STATUS_CODES, clientAddressSymbol, originPathnameSymbol, responseSentSymbol, ClientAddressNotAvailable, PrerenderClientAddressNotAvailable, StaticClientAddressNotAvailable, NoMatchingStaticPathFound, OnlyResponseCanBeReturned, MissingMediaQueryDirective, NoMatchingRenderer, NoClientOnlyHint, InvalidGetStaticPathsEntry, InvalidGetStaticPathsReturn, GetStaticPathsExpectedParams, GetStaticPathsInvalidRouteParam, GetStaticPathsRequired, ReservedSlotName, NoMatchingImport, PageNumberParamNotFound, PrerenderDynamicEndpointPathCollide, ResponseSentError, MiddlewareNoDataOrNextCalled, MiddlewareNotAResponse, EndpointDidNotReturnAResponse, LocalsNotAnObject, LocalsReassigned, AstroResponseHeadersReassigned, i18nNoLocaleFoundInPath, RewriteWithBodyUsed, ForbiddenRewrite, ActionsReturnedInvalidDataError, ActionNotFoundError, SessionStorageInitError, SessionStorageSaveError, AstroError, FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM, isTTY, $, bold, dim, red, green, yellow, blue, replace, ca, esca, pe2, escape2, escapeHTML, HTMLBytes, HTMLString, markHTMLString, AstroJSX, RenderInstructionSymbol, PROP_TYPE, transitionDirectivesToCopyOnIsland, dictionary, binary, headAndContentSym, astro_island_prebuilt_default, ISLAND_STYLES, voidElementNames, htmlBooleanAttributes, AMPERSAND_REGEX, DOUBLE_QUOTE_REGEX, STATIC_DIRECTIVES, toIdent, toAttributeString, kebab, toStyleString, noop, BufferedRenderer, isNode, isDeno, VALID_PROTOCOLS, uniqueElements, alphabetUpperCase, decodeMap, EncodingPadding$1, DecodingPadding$1, base64Alphabet, EncodingPadding, DecodingPadding, base64DecodeMap, ALGORITHM, encoder$1, decoder$1, IV_LENGTH, renderTemplateResultSym, RenderTemplateResult, slotString, SlotString, internalProps, SCRIPT_RE, COMMENT_RE, SCRIPT_REPLACER, COMMENT_REPLACER, renderServerIslandRuntime, Fragment, Renderer, encoder, decoder, astroComponentInstanceSym, AstroComponentInstance, DOCTYPE_EXP, needsHeadRenderingSymbol, rendererAliases, clientOnlyValues, ASTRO_SLOT_EXP, ASTRO_STATIC_SLOT_EXP, ClientOnlyPlaceholder, hasTriedRenderComponentSymbol, cssesc_1, hasRequiredCssesc;
var init_server_jD9syGVz = __esm({
  ".wrangler/tmp/pages-aJ3rp1/chunks/astro/server_jD9syGVz.mjs"() {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    ASTRO_VERSION = "5.7.5";
    REROUTE_DIRECTIVE_HEADER = "X-Astro-Reroute";
    REWRITE_DIRECTIVE_HEADER_KEY = "X-Astro-Rewrite";
    REWRITE_DIRECTIVE_HEADER_VALUE = "yes";
    NOOP_MIDDLEWARE_HEADER = "X-Astro-Noop";
    ROUTE_TYPE_HEADER = "X-Astro-Route-Type";
    DEFAULT_404_COMPONENT = "astro-default-404.astro";
    REDIRECT_STATUS_CODES = [301, 302, 303, 307, 308, 300, 304];
    REROUTABLE_STATUS_CODES = [404, 500];
    clientAddressSymbol = Symbol.for("astro.clientAddress");
    originPathnameSymbol = Symbol.for("astro.originPathname");
    responseSentSymbol = Symbol.for("astro.responseSent");
    ClientAddressNotAvailable = {
      name: "ClientAddressNotAvailable",
      title: "`Astro.clientAddress` is not available in current adapter.",
      message: /* @__PURE__ */ __name((adapterName) => `\`Astro.clientAddress\` is not available in the \`${adapterName}\` adapter. File an issue with the adapter to add support.`, "message")
    };
    PrerenderClientAddressNotAvailable = {
      name: "PrerenderClientAddressNotAvailable",
      title: "`Astro.clientAddress` cannot be used inside prerendered routes.",
      message: /* @__PURE__ */ __name((name) => `\`Astro.clientAddress\` cannot be used inside prerendered route ${name}`, "message")
    };
    StaticClientAddressNotAvailable = {
      name: "StaticClientAddressNotAvailable",
      title: "`Astro.clientAddress` is not available in prerendered pages.",
      message: "`Astro.clientAddress` is only available on pages that are server-rendered.",
      hint: "See https://docs.astro.build/en/guides/on-demand-rendering/ for more information on how to enable SSR."
    };
    NoMatchingStaticPathFound = {
      name: "NoMatchingStaticPathFound",
      title: "No static path found for requested path.",
      message: /* @__PURE__ */ __name((pathName) => `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${pathName}\`.`, "message"),
      hint: /* @__PURE__ */ __name((possibleRoutes) => `Possible dynamic routes being matched: ${possibleRoutes.join(", ")}.`, "hint")
    };
    OnlyResponseCanBeReturned = {
      name: "OnlyResponseCanBeReturned",
      title: "Invalid type returned by Astro page.",
      message: /* @__PURE__ */ __name((route, returnedValue) => `Route \`${route ? route : ""}\` returned a \`${returnedValue}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`, "message"),
      hint: "See https://docs.astro.build/en/guides/on-demand-rendering/#response for more information."
    };
    MissingMediaQueryDirective = {
      name: "MissingMediaQueryDirective",
      title: "Missing value for `client:media` directive.",
      message: 'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'
    };
    NoMatchingRenderer = {
      name: "NoMatchingRenderer",
      title: "No matching renderer found.",
      message: /* @__PURE__ */ __name((componentName, componentExtension, plural, validRenderersCount) => `Unable to render \`${componentName}\`.

${validRenderersCount > 0 ? `There ${plural ? "are" : "is"} ${validRenderersCount} renderer${plural ? "s" : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were" : "it was not"} able to server-side render \`${componentName}\`.` : `No valid renderer was found ${componentExtension ? `for the \`.${componentExtension}\` file extension.` : `for this file extension.`}`}`, "message"),
      hint: /* @__PURE__ */ __name((probableRenderers) => `Did you mean to enable the ${probableRenderers} integration?

See https://docs.astro.build/en/guides/framework-components/ for more information on how to install and configure integrations.`, "hint")
    };
    NoClientOnlyHint = {
      name: "NoClientOnlyHint",
      title: "Missing hint on client:only directive.",
      message: /* @__PURE__ */ __name((componentName) => `Unable to render \`${componentName}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`, "message"),
      hint: /* @__PURE__ */ __name((probableRenderers) => `Did you mean to pass \`client:only="${probableRenderers}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`, "hint")
    };
    InvalidGetStaticPathsEntry = {
      name: "InvalidGetStaticPathsEntry",
      title: "Invalid entry inside getStaticPath's return value",
      message: /* @__PURE__ */ __name((entryType) => `Invalid entry returned by getStaticPaths. Expected an object, got \`${entryType}\``, "message"),
      hint: "If you're using a `.map` call, you might be looking for `.flatMap()` instead. See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on getStaticPaths."
    };
    InvalidGetStaticPathsReturn = {
      name: "InvalidGetStaticPathsReturn",
      title: "Invalid value returned by getStaticPaths.",
      message: /* @__PURE__ */ __name((returnType) => `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${returnType}\``, "message"),
      hint: "See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on getStaticPaths."
    };
    GetStaticPathsExpectedParams = {
      name: "GetStaticPathsExpectedParams",
      title: "Missing params property on `getStaticPaths` route.",
      message: "Missing or empty required `params` property on `getStaticPaths` route.",
      hint: "See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on getStaticPaths."
    };
    GetStaticPathsInvalidRouteParam = {
      name: "GetStaticPathsInvalidRouteParam",
      title: "Invalid value for `getStaticPaths` route parameter.",
      message: /* @__PURE__ */ __name((key, value, valueType) => `Invalid getStaticPaths route parameter for \`${key}\`. Expected undefined, a string or a number, received \`${valueType}\` (\`${value}\`)`, "message"),
      hint: "See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on getStaticPaths."
    };
    GetStaticPathsRequired = {
      name: "GetStaticPathsRequired",
      title: "`getStaticPaths()` function required for dynamic routes.",
      message: "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",
      hint: `See https://docs.astro.build/en/guides/routing/#dynamic-routes for more information on dynamic routes.

	If you meant for this route to be server-rendered, set \`export const prerender = false;\` in the page.`
    };
    ReservedSlotName = {
      name: "ReservedSlotName",
      title: "Invalid slot name.",
      message: /* @__PURE__ */ __name((slotName2) => `Unable to create a slot named \`${slotName2}\`. \`${slotName2}\` is a reserved slot name. Please update the name of this slot.`, "message")
    };
    NoMatchingImport = {
      name: "NoMatchingImport",
      title: "No import found for component.",
      message: /* @__PURE__ */ __name((componentName) => `Could not render \`${componentName}\`. No matching import has been found for \`${componentName}\`.`, "message"),
      hint: "Please make sure the component is properly imported."
    };
    PageNumberParamNotFound = {
      name: "PageNumberParamNotFound",
      title: "Page number param not found.",
      message: /* @__PURE__ */ __name((paramName) => `[paginate()] page number param \`${paramName}\` not found in your filepath.`, "message"),
      hint: "Rename your file to `[page].astro` or `[...page].astro`."
    };
    PrerenderDynamicEndpointPathCollide = {
      name: "PrerenderDynamicEndpointPathCollide",
      title: "Prerendered dynamic endpoint has path collision.",
      message: /* @__PURE__ */ __name((pathname) => `Could not render \`${pathname}\` with an \`undefined\` param as the generated path will collide during prerendering. Prevent passing \`undefined\` as \`params\` for the endpoint's \`getStaticPaths()\` function, or add an additional extension to the endpoint's filename.`, "message"),
      hint: /* @__PURE__ */ __name((filename) => `Rename \`${filename}\` to \`${filename.replace(/\.(?:js|ts)/, (m2) => `.json` + m2)}\``, "hint")
    };
    ResponseSentError = {
      name: "ResponseSentError",
      title: "Unable to set response.",
      message: "The response has already been sent to the browser and cannot be altered."
    };
    MiddlewareNoDataOrNextCalled = {
      name: "MiddlewareNoDataOrNextCalled",
      title: "The middleware didn't return a `Response`.",
      message: "Make sure your middleware returns a `Response` object, either directly or by returning the `Response` from calling the `next` function."
    };
    MiddlewareNotAResponse = {
      name: "MiddlewareNotAResponse",
      title: "The middleware returned something that is not a `Response` object.",
      message: "Any data returned from middleware must be a valid `Response` object."
    };
    EndpointDidNotReturnAResponse = {
      name: "EndpointDidNotReturnAResponse",
      title: "The endpoint did not return a `Response`.",
      message: "An endpoint must return either a `Response`, or a `Promise` that resolves with a `Response`."
    };
    LocalsNotAnObject = {
      name: "LocalsNotAnObject",
      title: "Value assigned to `locals` is not accepted.",
      message: "`locals` can only be assigned to an object. Other values like numbers, strings, etc. are not accepted.",
      hint: "If you tried to remove some information from the `locals` object, try to use `delete` or set the property to `undefined`."
    };
    LocalsReassigned = {
      name: "LocalsReassigned",
      title: "`locals` must not be reassigned.",
      message: "`locals` can not be assigned directly.",
      hint: "Set a `locals` property instead."
    };
    AstroResponseHeadersReassigned = {
      name: "AstroResponseHeadersReassigned",
      title: "`Astro.response.headers` must not be reassigned.",
      message: "Individual headers can be added to and removed from `Astro.response.headers`, but it must not be replaced with another instance of `Headers` altogether.",
      hint: "Consider using `Astro.response.headers.add()`, and `Astro.response.headers.delete()`."
    };
    i18nNoLocaleFoundInPath = {
      name: "i18nNoLocaleFoundInPath",
      title: "The path doesn't contain any locale",
      message: "You tried to use an i18n utility on a path that doesn't contain any locale. You can use `pathHasLocale` first to determine if the path has a locale."
    };
    RewriteWithBodyUsed = {
      name: "RewriteWithBodyUsed",
      title: "Cannot use Astro.rewrite after the request body has been read",
      message: "Astro.rewrite() cannot be used if the request body has already been read. If you need to read the body, first clone the request."
    };
    ForbiddenRewrite = {
      name: "ForbiddenRewrite",
      title: "Forbidden rewrite to a static route.",
      message: /* @__PURE__ */ __name((from, to, component) => `You tried to rewrite the on-demand route '${from}' with the static route '${to}', when using the 'server' output. 

The static route '${to}' is rendered by the component
'${component}', which is marked as prerendered. This is a forbidden operation because during the build the component '${component}' is compiled to an
HTML file, which can't be retrieved at runtime by Astro.`, "message"),
      hint: /* @__PURE__ */ __name((component) => `Add \`export const prerender = false\` to the component '${component}', or use a Astro.redirect().`, "hint")
    };
    ActionsReturnedInvalidDataError = {
      name: "ActionsReturnedInvalidDataError",
      title: "Action handler returned invalid data.",
      message: /* @__PURE__ */ __name((error5) => `Action handler returned invalid data. Handlers should return serializable data types like objects, arrays, strings, and numbers. Parse error: ${error5}`, "message"),
      hint: "See the devalue library for all supported types: https://github.com/rich-harris/devalue"
    };
    ActionNotFoundError = {
      name: "ActionNotFoundError",
      title: "Action not found.",
      message: /* @__PURE__ */ __name((actionName) => `The server received a request for an action named \`${actionName}\` but could not find a match. If you renamed an action, check that you've updated your \`actions/index\` file and your calling code to match.`, "message"),
      hint: "You can run `astro check` to detect type errors caused by mismatched action names."
    };
    SessionStorageInitError = {
      name: "SessionStorageInitError",
      title: "Session storage could not be initialized.",
      message: /* @__PURE__ */ __name((error5, driver) => `Error when initializing session storage${driver ? ` with driver \`${driver}\`` : ""}. \`${error5 ?? ""}\``, "message"),
      hint: "For more information, see https://docs.astro.build/en/guides/sessions/"
    };
    SessionStorageSaveError = {
      name: "SessionStorageSaveError",
      title: "Session data could not be saved.",
      message: /* @__PURE__ */ __name((error5, driver) => `Error when saving session data${driver ? ` with driver \`${driver}\`` : ""}. \`${error5 ?? ""}\``, "message"),
      hint: "For more information, see https://docs.astro.build/en/guides/sessions/"
    };
    __name(normalizeLF, "normalizeLF");
    __name(codeFrame, "codeFrame");
    AstroError = class extends Error {
      static {
        __name(this, "AstroError");
      }
      loc;
      title;
      hint;
      frame;
      type = "AstroError";
      constructor(props, options) {
        const { name, title: title3, message, stack, location, hint, frame } = props;
        super(message, options);
        this.title = title3;
        this.name = name;
        if (message) this.message = message;
        this.stack = stack ? stack : this.stack;
        this.loc = location;
        this.hint = hint;
        this.frame = frame;
      }
      setLocation(location) {
        this.loc = location;
      }
      setName(name) {
        this.name = name;
      }
      setMessage(message) {
        this.message = message;
      }
      setHint(hint) {
        this.hint = hint;
      }
      setFrame(source, location) {
        this.frame = codeFrame(source, location);
      }
      static is(err) {
        return err.type === "AstroError";
      }
    };
    isTTY = true;
    if (typeof process !== "undefined") {
      ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
      isTTY = process.stdout && process.stdout.isTTY;
    }
    $ = {
      enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
    };
    __name(init, "init");
    bold = init(1, 22);
    dim = init(2, 22);
    red = init(31, 39);
    green = init(32, 39);
    yellow = init(33, 39);
    blue = init(34, 39);
    __name(renderEndpoint, "renderEndpoint");
    ({ replace } = "");
    ca = /[&<>'"]/g;
    esca = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    };
    pe2 = /* @__PURE__ */ __name((m2) => esca[m2], "pe");
    escape2 = /* @__PURE__ */ __name((es) => replace.call(es, ca, pe2), "escape");
    __name(isPromise, "isPromise");
    __name(streamAsyncIterator, "streamAsyncIterator");
    escapeHTML = escape2;
    HTMLBytes = class extends Uint8Array {
      static {
        __name(this, "HTMLBytes");
      }
    };
    Object.defineProperty(HTMLBytes.prototype, Symbol.toStringTag, {
      get() {
        return "HTMLBytes";
      }
    });
    HTMLString = class extends String {
      static {
        __name(this, "HTMLString");
      }
      get [Symbol.toStringTag]() {
        return "HTMLString";
      }
    };
    markHTMLString = /* @__PURE__ */ __name((value) => {
      if (value instanceof HTMLString) {
        return value;
      }
      if (typeof value === "string") {
        return new HTMLString(value);
      }
      return value;
    }, "markHTMLString");
    __name(isHTMLString, "isHTMLString");
    __name(markHTMLBytes, "markHTMLBytes");
    __name(hasGetReader, "hasGetReader");
    __name(unescapeChunksAsync, "unescapeChunksAsync");
    __name(unescapeChunks, "unescapeChunks");
    __name(unescapeHTML, "unescapeHTML");
    AstroJSX = "astro:jsx";
    __name(isVNode, "isVNode");
    RenderInstructionSymbol = Symbol.for("astro:render");
    __name(createRenderInstruction, "createRenderInstruction");
    __name(isRenderInstruction, "isRenderInstruction");
    __name(r, "r");
    __name(clsx, "clsx");
    PROP_TYPE = {
      Value: 0,
      JSON: 1,
      // Actually means Array
      RegExp: 2,
      Date: 3,
      Map: 4,
      Set: 5,
      BigInt: 6,
      URL: 7,
      Uint8Array: 8,
      Uint16Array: 9,
      Uint32Array: 10,
      Infinity: 11
    };
    __name(serializeArray, "serializeArray");
    __name(serializeObject, "serializeObject");
    __name(convertToSerializedForm, "convertToSerializedForm");
    __name(serializeProps, "serializeProps");
    transitionDirectivesToCopyOnIsland = Object.freeze([
      "data-astro-transition-scope",
      "data-astro-transition-persist",
      "data-astro-transition-persist-props"
    ]);
    __name(extractDirectives, "extractDirectives");
    __name(generateHydrateScript, "generateHydrateScript");
    dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
    binary = dictionary.length;
    __name(bitwise, "bitwise");
    __name(shorthash, "shorthash");
    __name(isAstroComponentFactory, "isAstroComponentFactory");
    __name(isAPropagatingComponent, "isAPropagatingComponent");
    headAndContentSym = Symbol.for("astro.headAndContent");
    __name(isHeadAndContent, "isHeadAndContent");
    astro_island_prebuilt_default = `(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[o]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t),11:t=>1/0*t},o=t=>{let[l,e]=t;return l in i?i[l](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([l,e])=>[l,o(e)]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template[data-astro-template]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("name")||"default"]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=\` (export \${v})\`),console.error(\`[hydrate] Error parsing props for component \${s}\`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro[c]===void 0){window.addEventListener(\`astro:\${c}\`,()=>this.start(),{once:!0});return}try{await Astro[c](async()=>{let n=this.getAttribute("renderer-url"),[h,{default:p}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h[u];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component[f]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(\`[astro-island] Error hydrating \${this.getAttribute("component-url")}\`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",["props"]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();`;
    ISLAND_STYLES = `<style>astro-island,astro-slot,astro-static-slot{display:contents}</style>`;
    __name(determineIfNeedsHydrationScript, "determineIfNeedsHydrationScript");
    __name(determinesIfNeedsDirectiveScript, "determinesIfNeedsDirectiveScript");
    __name(getDirectiveScriptText, "getDirectiveScriptText");
    __name(getPrescripts, "getPrescripts");
    voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
    htmlBooleanAttributes = /^(?:allowfullscreen|async|autofocus|autoplay|checked|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|inert|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|selected|itemscope)$/i;
    AMPERSAND_REGEX = /&/g;
    DOUBLE_QUOTE_REGEX = /"/g;
    STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
    toIdent = /* @__PURE__ */ __name((k) => k.trim().replace(/(?!^)\b\w|\s+|\W+/g, (match, index) => {
      if (/\W/.test(match)) return "";
      return index === 0 ? match : match.toUpperCase();
    }), "toIdent");
    toAttributeString = /* @__PURE__ */ __name((value, shouldEscape = true) => shouldEscape ? String(value).replace(AMPERSAND_REGEX, "&#38;").replace(DOUBLE_QUOTE_REGEX, "&#34;") : value, "toAttributeString");
    kebab = /* @__PURE__ */ __name((k) => k.toLowerCase() === k ? k : k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`), "kebab");
    toStyleString = /* @__PURE__ */ __name((obj) => Object.entries(obj).filter(([_2, v2]) => typeof v2 === "string" && v2.trim() || typeof v2 === "number").map(([k, v2]) => {
      if (k[0] !== "-" && k[1] !== "-") return `${kebab(k)}:${v2}`;
      return `${k}:${v2}`;
    }).join(";"), "toStyleString");
    __name(defineScriptVars, "defineScriptVars");
    __name(formatList, "formatList");
    __name(addAttribute, "addAttribute");
    __name(internalSpreadAttributes, "internalSpreadAttributes");
    __name(renderElement$1, "renderElement$1");
    noop = /* @__PURE__ */ __name(() => {
    }, "noop");
    BufferedRenderer = class {
      static {
        __name(this, "BufferedRenderer");
      }
      chunks = [];
      renderPromise;
      destination;
      /**
       * Determines whether buffer has been flushed
       * to the final destination.
       */
      flushed = false;
      constructor(destination, renderFunction) {
        this.destination = destination;
        this.renderPromise = renderFunction(this);
        if (isPromise(this.renderPromise)) {
          Promise.resolve(this.renderPromise).catch(noop);
        }
      }
      write(chunk) {
        if (this.flushed) {
          this.destination.write(chunk);
        } else {
          this.chunks.push(chunk);
        }
      }
      flush() {
        if (this.flushed) {
          throw new Error("The render buffer has already been flushed.");
        }
        this.flushed = true;
        for (const chunk of this.chunks) {
          this.destination.write(chunk);
        }
        return this.renderPromise;
      }
    };
    __name(createBufferedRenderer, "createBufferedRenderer");
    isNode = typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]";
    isDeno = typeof Deno !== "undefined";
    __name(promiseWithResolvers, "promiseWithResolvers");
    VALID_PROTOCOLS = ["http:", "https:"];
    __name(isHttpUrl, "isHttpUrl");
    uniqueElements = /* @__PURE__ */ __name((item, index, all) => {
      const props = JSON.stringify(item.props);
      const children2 = item.children;
      return index === all.findIndex((i2) => JSON.stringify(i2.props) === props && i2.children == children2);
    }, "uniqueElements");
    __name(renderAllHeadContent, "renderAllHeadContent");
    __name(maybeRenderHead, "maybeRenderHead");
    __name(encodeHexUpperCase, "encodeHexUpperCase");
    __name(decodeHex, "decodeHex");
    alphabetUpperCase = "0123456789ABCDEF";
    decodeMap = {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      a: 10,
      A: 10,
      b: 11,
      B: 11,
      c: 12,
      C: 12,
      d: 13,
      D: 13,
      e: 14,
      E: 14,
      f: 15,
      F: 15
    };
    (function(EncodingPadding2) {
      EncodingPadding2[EncodingPadding2["Include"] = 0] = "Include";
      EncodingPadding2[EncodingPadding2["None"] = 1] = "None";
    })(EncodingPadding$1 || (EncodingPadding$1 = {}));
    (function(DecodingPadding2) {
      DecodingPadding2[DecodingPadding2["Required"] = 0] = "Required";
      DecodingPadding2[DecodingPadding2["Ignore"] = 1] = "Ignore";
    })(DecodingPadding$1 || (DecodingPadding$1 = {}));
    __name(encodeBase64, "encodeBase64");
    __name(encodeBase64_internal, "encodeBase64_internal");
    base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    __name(decodeBase64, "decodeBase64");
    __name(decodeBase64_internal, "decodeBase64_internal");
    (function(EncodingPadding2) {
      EncodingPadding2[EncodingPadding2["Include"] = 0] = "Include";
      EncodingPadding2[EncodingPadding2["None"] = 1] = "None";
    })(EncodingPadding || (EncodingPadding = {}));
    (function(DecodingPadding2) {
      DecodingPadding2[DecodingPadding2["Required"] = 0] = "Required";
      DecodingPadding2[DecodingPadding2["Ignore"] = 1] = "Ignore";
    })(DecodingPadding || (DecodingPadding = {}));
    base64DecodeMap = {
      "0": 52,
      "1": 53,
      "2": 54,
      "3": 55,
      "4": 56,
      "5": 57,
      "6": 58,
      "7": 59,
      "8": 60,
      "9": 61,
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
      K: 10,
      L: 11,
      M: 12,
      N: 13,
      O: 14,
      P: 15,
      Q: 16,
      R: 17,
      S: 18,
      T: 19,
      U: 20,
      V: 21,
      W: 22,
      X: 23,
      Y: 24,
      Z: 25,
      a: 26,
      b: 27,
      c: 28,
      d: 29,
      e: 30,
      f: 31,
      g: 32,
      h: 33,
      i: 34,
      j: 35,
      k: 36,
      l: 37,
      m: 38,
      n: 39,
      o: 40,
      p: 41,
      q: 42,
      r: 43,
      s: 44,
      t: 45,
      u: 46,
      v: 47,
      w: 48,
      x: 49,
      y: 50,
      z: 51,
      "+": 62,
      "/": 63
    };
    ALGORITHM = "AES-GCM";
    __name(decodeKey, "decodeKey");
    encoder$1 = new TextEncoder();
    decoder$1 = new TextDecoder();
    IV_LENGTH = 24;
    __name(encryptString, "encryptString");
    __name(decryptString, "decryptString");
    renderTemplateResultSym = Symbol.for("astro.renderTemplateResult");
    RenderTemplateResult = class {
      static {
        __name(this, "RenderTemplateResult");
      }
      [renderTemplateResultSym] = true;
      htmlParts;
      expressions;
      error;
      constructor(htmlParts, expressions) {
        this.htmlParts = htmlParts;
        this.error = void 0;
        this.expressions = expressions.map((expression) => {
          if (isPromise(expression)) {
            return Promise.resolve(expression).catch((err) => {
              if (!this.error) {
                this.error = err;
                throw err;
              }
            });
          }
          return expression;
        });
      }
      render(destination) {
        const flushers = this.expressions.map((exp) => {
          return createBufferedRenderer(destination, (bufferDestination) => {
            if (exp || exp === 0) {
              return renderChild(bufferDestination, exp);
            }
          });
        });
        let i2 = 0;
        const iterate = /* @__PURE__ */ __name(() => {
          while (i2 < this.htmlParts.length) {
            const html = this.htmlParts[i2];
            const flusher = flushers[i2];
            i2++;
            if (html) {
              destination.write(markHTMLString(html));
            }
            if (flusher) {
              const result = flusher.flush();
              if (isPromise(result)) {
                return result.then(iterate);
              }
            }
          }
        }, "iterate");
        return iterate();
      }
    };
    __name(isRenderTemplateResult, "isRenderTemplateResult");
    __name(renderTemplate, "renderTemplate");
    slotString = Symbol.for("astro:slot-string");
    SlotString = class extends HTMLString {
      static {
        __name(this, "SlotString");
      }
      instructions;
      [slotString];
      constructor(content, instructions) {
        super(content);
        this.instructions = instructions;
        this[slotString] = true;
      }
    };
    __name(isSlotString, "isSlotString");
    __name(renderSlot, "renderSlot");
    __name(renderSlotToString, "renderSlotToString");
    __name(renderSlots, "renderSlots");
    __name(createSlotValueFromString, "createSlotValueFromString");
    internalProps = /* @__PURE__ */ new Set([
      "server:component-path",
      "server:component-export",
      "server:component-directive",
      "server:defer"
    ]);
    __name(containsServerDirective, "containsServerDirective");
    SCRIPT_RE = /<\/script/giu;
    COMMENT_RE = /<!--/gu;
    SCRIPT_REPLACER = "<\\/script";
    COMMENT_REPLACER = "\\u003C!--";
    __name(safeJsonStringify, "safeJsonStringify");
    __name(createSearchParams, "createSearchParams");
    __name(isWithinURLLimit, "isWithinURLLimit");
    __name(renderServerIsland, "renderServerIsland");
    renderServerIslandRuntime = /* @__PURE__ */ __name(() => markHTMLString(
      `
	<script>
		async function replaceServerIsland(id, r) {
			let s = document.querySelector(\`script[data-island-id="\${id}"]\`);
			// If there's no matching script, or the request fails then return
			if (!s || r.status !== 200 || r.headers.get('content-type')?.split(';')[0].trim() !== 'text/html') return;
			// Load the HTML before modifying the DOM in case of errors
			let html = await r.text();
			// Remove any placeholder content before the island script
			while (s.previousSibling && s.previousSibling.nodeType !== 8 && s.previousSibling.data !== '[if astro]>server-island-start<![endif]')
				s.previousSibling.remove();
			s.previousSibling?.remove();
			// Insert the new HTML
			s.before(document.createRange().createContextualFragment(html));
			// Remove the script. Prior to v5.4.2, this was the trick to force rerun of scripts.  Keeping it to minimize change to the existing behavior.
			s.remove();
		}
	<\/script>`.split("\n").map((line) => line.trim()).filter((line) => line && !line.startsWith("//")).join(" ")
    ), "renderServerIslandRuntime");
    Fragment = Symbol.for("astro:fragment");
    Renderer = Symbol.for("astro:renderer");
    encoder = new TextEncoder();
    decoder = new TextDecoder();
    __name(stringifyChunk, "stringifyChunk");
    __name(chunkToString, "chunkToString");
    __name(chunkToByteArray, "chunkToByteArray");
    __name(isRenderInstance, "isRenderInstance");
    __name(renderChild, "renderChild");
    __name(renderArray, "renderArray");
    __name(renderIterable, "renderIterable");
    __name(renderAsyncIterable, "renderAsyncIterable");
    astroComponentInstanceSym = Symbol.for("astro.componentInstance");
    AstroComponentInstance = class {
      static {
        __name(this, "AstroComponentInstance");
      }
      [astroComponentInstanceSym] = true;
      result;
      props;
      slotValues;
      factory;
      returnValue;
      constructor(result, props, slots, factory) {
        this.result = result;
        this.props = props;
        this.factory = factory;
        this.slotValues = {};
        for (const name in slots) {
          let didRender = false;
          let value = slots[name](result);
          this.slotValues[name] = () => {
            if (!didRender) {
              didRender = true;
              return value;
            }
            return slots[name](result);
          };
        }
      }
      init(result) {
        if (this.returnValue !== void 0) {
          return this.returnValue;
        }
        this.returnValue = this.factory(result, this.props, this.slotValues);
        if (isPromise(this.returnValue)) {
          this.returnValue.then((resolved) => {
            this.returnValue = resolved;
          }).catch(() => {
          });
        }
        return this.returnValue;
      }
      render(destination) {
        const returnValue = this.init(this.result);
        if (isPromise(returnValue)) {
          return returnValue.then((x2) => this.renderImpl(destination, x2));
        }
        return this.renderImpl(destination, returnValue);
      }
      renderImpl(destination, returnValue) {
        if (isHeadAndContent(returnValue)) {
          return returnValue.content.render(destination);
        } else {
          return renderChild(destination, returnValue);
        }
      }
    };
    __name(validateComponentProps, "validateComponentProps");
    __name(createAstroComponentInstance, "createAstroComponentInstance");
    __name(isAstroComponentInstance, "isAstroComponentInstance");
    DOCTYPE_EXP = /<!doctype html/i;
    __name(renderToString2, "renderToString");
    __name(renderToReadableStream, "renderToReadableStream");
    __name(callComponentAsTemplateResultOrResponse, "callComponentAsTemplateResultOrResponse");
    __name(bufferHeadContent, "bufferHeadContent");
    __name(renderToAsyncIterable, "renderToAsyncIterable");
    __name(toPromise, "toPromise");
    __name(componentIsHTMLElement, "componentIsHTMLElement");
    __name(renderHTMLElement, "renderHTMLElement");
    __name(getHTMLElementName, "getHTMLElementName");
    needsHeadRenderingSymbol = Symbol.for("astro.needsHeadRendering");
    rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
    clientOnlyValues = /* @__PURE__ */ new Set(["solid-js", "react", "preact", "vue", "svelte"]);
    __name(guessRenderers, "guessRenderers");
    __name(isFragmentComponent, "isFragmentComponent");
    __name(isHTMLComponent, "isHTMLComponent");
    ASTRO_SLOT_EXP = /<\/?astro-slot\b[^>]*>/g;
    ASTRO_STATIC_SLOT_EXP = /<\/?astro-static-slot\b[^>]*>/g;
    __name(removeStaticAstroSlot, "removeStaticAstroSlot");
    __name(renderFrameworkComponent, "renderFrameworkComponent");
    __name(sanitizeElementName, "sanitizeElementName");
    __name(renderFragmentComponent, "renderFragmentComponent");
    __name(renderHTMLComponent, "renderHTMLComponent");
    __name(renderAstroComponent, "renderAstroComponent");
    __name(renderComponent, "renderComponent");
    __name(normalizeProps, "normalizeProps");
    __name(renderComponentToString, "renderComponentToString");
    __name(nonAstroPageNeedsHeadInjection, "nonAstroPageNeedsHeadInjection");
    ClientOnlyPlaceholder = "astro-client-only";
    hasTriedRenderComponentSymbol = Symbol("hasTriedRenderComponent");
    __name(renderJSX, "renderJSX");
    __name(renderJSXVNode, "renderJSXVNode");
    __name(renderElement, "renderElement");
    __name(prerenderElementChildren, "prerenderElementChildren");
    __name(renderPage, "renderPage");
    __name(requireCssesc, "requireCssesc");
    requireCssesc();
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("").reduce((v2, c2) => (v2[c2.charCodeAt(0)] = c2, v2), []);
    "-0123456789_".split("").reduce((v2, c2) => (v2[c2.charCodeAt(0)] = c2, v2), []);
    __name(spreadAttributes, "spreadAttributes");
  }
});

// .wrangler/tmp/pages-aJ3rp1/chunks/parse_EttCPxrw.mjs
function encode64(arraybuffer) {
  const dv = new DataView(arraybuffer);
  let binaryString = "";
  for (let i2 = 0; i2 < arraybuffer.byteLength; i2++) {
    binaryString += String.fromCharCode(dv.getUint8(i2));
  }
  return binaryToAscii(binaryString);
}
function decode64(string) {
  const binaryString = asciiToBinary(string);
  const arraybuffer = new ArrayBuffer(binaryString.length);
  const dv = new DataView(arraybuffer);
  for (let i2 = 0; i2 < arraybuffer.byteLength; i2++) {
    dv.setUint8(i2, binaryString.charCodeAt(i2));
  }
  return arraybuffer;
}
function asciiToBinary(data) {
  if (data.length % 4 === 0) {
    data = data.replace(/==?$/, "");
  }
  let output = "";
  let buffer = 0;
  let accumulatedBits = 0;
  for (let i2 = 0; i2 < data.length; i2++) {
    buffer <<= 6;
    buffer |= KEY_STRING.indexOf(data[i2]);
    accumulatedBits += 6;
    if (accumulatedBits === 24) {
      output += String.fromCharCode((buffer & 16711680) >> 16);
      output += String.fromCharCode((buffer & 65280) >> 8);
      output += String.fromCharCode(buffer & 255);
      buffer = accumulatedBits = 0;
    }
  }
  if (accumulatedBits === 12) {
    buffer >>= 4;
    output += String.fromCharCode(buffer);
  } else if (accumulatedBits === 18) {
    buffer >>= 2;
    output += String.fromCharCode((buffer & 65280) >> 8);
    output += String.fromCharCode(buffer & 255);
  }
  return output;
}
function binaryToAscii(str) {
  let out = "";
  for (let i2 = 0; i2 < str.length; i2 += 3) {
    const groupsOfSix = [void 0, void 0, void 0, void 0];
    groupsOfSix[0] = str.charCodeAt(i2) >> 2;
    groupsOfSix[1] = (str.charCodeAt(i2) & 3) << 4;
    if (str.length > i2 + 1) {
      groupsOfSix[1] |= str.charCodeAt(i2 + 1) >> 4;
      groupsOfSix[2] = (str.charCodeAt(i2 + 1) & 15) << 2;
    }
    if (str.length > i2 + 2) {
      groupsOfSix[2] |= str.charCodeAt(i2 + 2) >> 6;
      groupsOfSix[3] = str.charCodeAt(i2 + 2) & 63;
    }
    for (let j2 = 0; j2 < groupsOfSix.length; j2++) {
      if (typeof groupsOfSix[j2] === "undefined") {
        out += "=";
      } else {
        out += KEY_STRING[groupsOfSix[j2]];
      }
    }
  }
  return out;
}
function parse(serialized, revivers) {
  return unflatten(JSON.parse(serialized), revivers);
}
function unflatten(parsed, revivers) {
  if (typeof parsed === "number") return hydrate(parsed, true);
  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error("Invalid input");
  }
  const values = (
    /** @type {any[]} */
    parsed
  );
  const hydrated = Array(values.length);
  function hydrate(index, standalone = false) {
    if (index === UNDEFINED) return void 0;
    if (index === NAN) return NaN;
    if (index === POSITIVE_INFINITY) return Infinity;
    if (index === NEGATIVE_INFINITY) return -Infinity;
    if (index === NEGATIVE_ZERO) return -0;
    if (standalone) throw new Error(`Invalid input`);
    if (index in hydrated) return hydrated[index];
    const value = values[index];
    if (!value || typeof value !== "object") {
      hydrated[index] = value;
    } else if (Array.isArray(value)) {
      if (typeof value[0] === "string") {
        const type = value[0];
        const reviver = revivers?.[type];
        if (reviver) {
          return hydrated[index] = reviver(hydrate(value[1]));
        }
        switch (type) {
          case "Date":
            hydrated[index] = new Date(value[1]);
            break;
          case "Set":
            const set = /* @__PURE__ */ new Set();
            hydrated[index] = set;
            for (let i2 = 1; i2 < value.length; i2 += 1) {
              set.add(hydrate(value[i2]));
            }
            break;
          case "Map":
            const map = /* @__PURE__ */ new Map();
            hydrated[index] = map;
            for (let i2 = 1; i2 < value.length; i2 += 2) {
              map.set(hydrate(value[i2]), hydrate(value[i2 + 1]));
            }
            break;
          case "RegExp":
            hydrated[index] = new RegExp(value[1], value[2]);
            break;
          case "Object":
            hydrated[index] = Object(value[1]);
            break;
          case "BigInt":
            hydrated[index] = BigInt(value[1]);
            break;
          case "null":
            const obj = /* @__PURE__ */ Object.create(null);
            hydrated[index] = obj;
            for (let i2 = 1; i2 < value.length; i2 += 2) {
              obj[value[i2]] = hydrate(value[i2 + 1]);
            }
            break;
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array": {
            const TypedArrayConstructor = globalThis[type];
            const base64 = value[1];
            const arraybuffer = decode64(base64);
            const typedArray = new TypedArrayConstructor(arraybuffer);
            hydrated[index] = typedArray;
            break;
          }
          case "ArrayBuffer": {
            const base64 = value[1];
            const arraybuffer = decode64(base64);
            hydrated[index] = arraybuffer;
            break;
          }
          default:
            throw new Error(`Unknown type ${type}`);
        }
      } else {
        const array = new Array(value.length);
        hydrated[index] = array;
        for (let i2 = 0; i2 < value.length; i2 += 1) {
          const n = value[i2];
          if (n === HOLE) continue;
          array[i2] = hydrate(n);
        }
      }
    } else {
      const object = {};
      hydrated[index] = object;
      for (const key in value) {
        const n = value[key];
        object[key] = hydrate(n);
      }
    }
    return hydrated[index];
  }
  __name(hydrate, "hydrate");
  return hydrate(0);
}
var KEY_STRING, UNDEFINED, HOLE, NAN, POSITIVE_INFINITY, NEGATIVE_INFINITY, NEGATIVE_ZERO;
var init_parse_EttCPxrw = __esm({
  ".wrangler/tmp/pages-aJ3rp1/chunks/parse_EttCPxrw.mjs"() {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    __name(encode64, "encode64");
    __name(decode64, "decode64");
    KEY_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    __name(asciiToBinary, "asciiToBinary");
    __name(binaryToAscii, "binaryToAscii");
    UNDEFINED = -1;
    HOLE = -2;
    NAN = -3;
    POSITIVE_INFINITY = -4;
    NEGATIVE_INFINITY = -5;
    NEGATIVE_ZERO = -6;
    __name(parse, "parse");
    __name(unflatten, "unflatten");
  }
});

// .wrangler/tmp/pages-aJ3rp1/chunks/astro-designed-error-pages_Bb--tmHv.mjs
function is_primitive(thing) {
  return Object(thing) !== thing;
}
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i2 = 0; i2 < len; i2 += 1) {
    const char = str[i2];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i2) + replacement;
      last_pos = i2 + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}
function enumerable_symbols(object) {
  return Object.getOwnPropertySymbols(object).filter(
    (symbol) => Object.getOwnPropertyDescriptor(object, symbol).enumerable
  );
}
function stringify_key(key) {
  return is_identifier.test(key) ? "." + key : "[" + JSON.stringify(key) + "]";
}
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  if (reducers) {
    for (const key of Object.getOwnPropertyNames(reducers)) {
      custom.push({ key, fn: reducers[key] });
    }
  }
  const keys = [];
  let p2 = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing)) return indexes.get(thing);
    if (thing === void 0) return UNDEFINED;
    if (Number.isNaN(thing)) return NAN;
    if (thing === Infinity) return POSITIVE_INFINITY;
    if (thing === -Infinity) return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO;
    const index2 = p2++;
    indexes.set(thing, index2);
    for (const { key, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index2] = `["${key}",${flatten(value2)}]`;
        return index2;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          const valid = !isNaN(thing.getDate());
          str = `["Date","${valid ? thing.toISOString() : ""}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i2 = 0; i2 < thing.length; i2 += 1) {
            if (i2 > 0) str += ",";
            if (i2 in thing) {
              keys.push(`[${i2}]`);
              str += flatten(thing[i2]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key) ? stringify_primitive(key) : "..."})`
            );
            str += `,${flatten(key)},${flatten(value2)}`;
            keys.pop();
          }
          str += "]";
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          const typedArray = thing;
          const base64 = encode64(typedArray.buffer);
          str = '["' + type + '","' + base64 + '"]';
          break;
        }
        case "ArrayBuffer": {
          const arraybuffer = thing;
          const base64 = encode64(arraybuffer);
          str = `["ArrayBuffer","${base64}"]`;
          break;
        }
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key in thing) {
              keys.push(stringify_key(key));
              str += `,${stringify_string(key)},${flatten(thing[key])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key in thing) {
              if (started) str += ",";
              started = true;
              keys.push(stringify_key(key));
              str += `${stringify_string(key)}:${flatten(thing[key])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index2] = str;
    return index2;
  }
  __name(flatten, "flatten");
  const index = flatten(value);
  if (index < 0) return `${index}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive(thing) {
  const type = typeof thing;
  if (type === "string") return stringify_string(thing);
  if (thing instanceof String) return stringify_string(thing.toString());
  if (thing === void 0) return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO.toString();
  if (type === "bigint") return `["BigInt","${thing}"]`;
  return String(thing);
}
function isActionError(error5) {
  return typeof error5 === "object" && error5 != null && "type" in error5 && error5.type === "AstroActionError";
}
function isInputError(error5) {
  return typeof error5 === "object" && error5 != null && "type" in error5 && error5.type === "AstroActionInputError" && "issues" in error5 && Array.isArray(error5.issues);
}
function getActionQueryString(name) {
  const searchParams = new URLSearchParams({ [ACTION_QUERY_PARAMS$1.actionName]: name });
  return `?${searchParams.toString()}`;
}
function serializeActionResult(res) {
  if (res.error) {
    if (Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV) {
      actionResultErrorStack.set(res.error.stack);
    }
    let body2;
    if (res.error instanceof ActionInputError) {
      body2 = {
        type: res.error.type,
        issues: res.error.issues,
        fields: res.error.fields
      };
    } else {
      body2 = {
        ...res.error,
        message: res.error.message
      };
    }
    return {
      type: "error",
      status: res.error.status,
      contentType: "application/json",
      body: JSON.stringify(body2)
    };
  }
  if (res.data === void 0) {
    return {
      type: "empty",
      status: 204
    };
  }
  let body;
  try {
    body = stringify(res.data, {
      // Add support for URL objects
      URL: /* @__PURE__ */ __name((value) => value instanceof URL && value.href, "URL")
    });
  } catch (e) {
    let hint = ActionsReturnedInvalidDataError.hint;
    if (res.data instanceof Response) {
      hint = REDIRECT_STATUS_CODES.includes(res.data.status) ? "If you need to redirect when the action succeeds, trigger a redirect where the action is called. See the Actions guide for server and client redirect examples: https://docs.astro.build/en/guides/actions." : "If you need to return a Response object, try using a server endpoint instead. See https://docs.astro.build/en/guides/endpoints/#server-endpoints-api-routes";
    }
    throw new AstroError({
      ...ActionsReturnedInvalidDataError,
      message: ActionsReturnedInvalidDataError.message(String(e)),
      hint
    });
  }
  return {
    type: "data",
    status: 200,
    contentType: "application/json+devalue",
    body
  };
}
function deserializeActionResult(res) {
  if (res.type === "error") {
    let json;
    try {
      json = JSON.parse(res.body);
    } catch {
      return {
        data: void 0,
        error: new ActionError({
          message: res.body,
          code: "INTERNAL_SERVER_ERROR"
        })
      };
    }
    if (Object.assign(__vite_import_meta_env__, { _: process.env._ })?.PROD) {
      return { error: ActionError.fromJson(json), data: void 0 };
    } else {
      const error5 = ActionError.fromJson(json);
      error5.stack = actionResultErrorStack.get();
      return {
        error: error5,
        data: void 0
      };
    }
  }
  if (res.type === "empty") {
    return { data: void 0, error: void 0 };
  }
  return {
    data: parse(res.body, {
      URL: /* @__PURE__ */ __name((href) => new URL(href), "URL")
    }),
    error: void 0
  };
}
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1;
  Object.defineProperty(dist, "__esModule", { value: true });
  dist.parse = parse2;
  dist.serialize = serialize;
  const cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
  const cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
  const domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
  const pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
  const __toString = Object.prototype.toString;
  const NullObject = /* @__PURE__ */ (() => {
    const C2 = /* @__PURE__ */ __name(function() {
    }, "C");
    C2.prototype = /* @__PURE__ */ Object.create(null);
    return C2;
  })();
  function parse2(str, options) {
    const obj = new NullObject();
    const len = str.length;
    if (len < 2)
      return obj;
    const dec = options?.decode || decode;
    let index = 0;
    do {
      const eqIdx = str.indexOf("=", index);
      if (eqIdx === -1)
        break;
      const colonIdx = str.indexOf(";", index);
      const endIdx = colonIdx === -1 ? len : colonIdx;
      if (eqIdx > endIdx) {
        index = str.lastIndexOf(";", eqIdx - 1) + 1;
        continue;
      }
      const keyStartIdx = startIndex(str, index, eqIdx);
      const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
      const key = str.slice(keyStartIdx, keyEndIdx);
      if (obj[key] === void 0) {
        let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
        let valEndIdx = endIndex(str, endIdx, valStartIdx);
        const value = dec(str.slice(valStartIdx, valEndIdx));
        obj[key] = value;
      }
      index = endIdx + 1;
    } while (index < len);
    return obj;
  }
  __name(parse2, "parse");
  function startIndex(str, index, max) {
    do {
      const code = str.charCodeAt(index);
      if (code !== 32 && code !== 9)
        return index;
    } while (++index < max);
    return max;
  }
  __name(startIndex, "startIndex");
  function endIndex(str, index, min) {
    while (index > min) {
      const code = str.charCodeAt(--index);
      if (code !== 32 && code !== 9)
        return index + 1;
    }
    return min;
  }
  __name(endIndex, "endIndex");
  function serialize(name, val, options) {
    const enc = options?.encode || encodeURIComponent;
    if (!cookieNameRegExp.test(name)) {
      throw new TypeError(`argument name is invalid: ${name}`);
    }
    const value = enc(val);
    if (!cookieValueRegExp.test(value)) {
      throw new TypeError(`argument val is invalid: ${val}`);
    }
    let str = name + "=" + value;
    if (!options)
      return str;
    if (options.maxAge !== void 0) {
      if (!Number.isInteger(options.maxAge)) {
        throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
      }
      str += "; Max-Age=" + options.maxAge;
    }
    if (options.domain) {
      if (!domainValueRegExp.test(options.domain)) {
        throw new TypeError(`option domain is invalid: ${options.domain}`);
      }
      str += "; Domain=" + options.domain;
    }
    if (options.path) {
      if (!pathValueRegExp.test(options.path)) {
        throw new TypeError(`option path is invalid: ${options.path}`);
      }
      str += "; Path=" + options.path;
    }
    if (options.expires) {
      if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
        throw new TypeError(`option expires is invalid: ${options.expires}`);
      }
      str += "; Expires=" + options.expires.toUTCString();
    }
    if (options.httpOnly) {
      str += "; HttpOnly";
    }
    if (options.secure) {
      str += "; Secure";
    }
    if (options.partitioned) {
      str += "; Partitioned";
    }
    if (options.priority) {
      const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : void 0;
      switch (priority) {
        case "low":
          str += "; Priority=Low";
          break;
        case "medium":
          str += "; Priority=Medium";
          break;
        case "high":
          str += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${options.priority}`);
      }
    }
    if (options.sameSite) {
      const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
      switch (sameSite) {
        case true:
        case "strict":
          str += "; SameSite=Strict";
          break;
        case "lax":
          str += "; SameSite=Lax";
          break;
        case "none":
          str += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
      }
    }
    return str;
  }
  __name(serialize, "serialize");
  function decode(str) {
    if (str.indexOf("%") === -1)
      return str;
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  }
  __name(decode, "decode");
  function isDate(val) {
    return __toString.call(val) === "[object Date]";
  }
  __name(isDate, "isDate");
  return dist;
}
function template({
  title: title3,
  pathname,
  statusCode = 404,
  tabTitle,
  body
}) {
  return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title3}</span></h1>
			${body || `
				<pre>Path: ${escape2(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}
function ensure404Route(manifest2) {
  if (!manifest2.routes.some((route) => route.route === "/404")) {
    manifest2.routes.push(DEFAULT_404_ROUTE);
  }
  return manifest2;
}
async function default404Page({ pathname }) {
  return new Response(
    template({
      statusCode: 404,
      title: "Not found",
      tabTitle: "404: Not Found",
      pathname
    }),
    { status: 404, headers: { "Content-Type": "text/html" } }
  );
}
var ImportType, E3, DevalueError, object_proto_names, is_identifier, ACTION_QUERY_PARAMS$1, ACTION_RPC_ROUTE_PATTERN, __vite_import_meta_env__, ACTION_QUERY_PARAMS, codeToStatusMap, statusToCodeMap, ActionError, ActionInputError, actionResultErrorStack, dist, hasRequiredDist, distExports, DEFAULT_404_ROUTE, default404Instance;
var init_astro_designed_error_pages_Bb_tmHv = __esm({
  ".wrangler/tmp/pages-aJ3rp1/chunks/astro-designed-error-pages_Bb--tmHv.mjs"() {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_jD9syGVz();
    init_parse_EttCPxrw();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    !function(A2) {
      A2[A2.Static = 1] = "Static", A2[A2.Dynamic = 2] = "Dynamic", A2[A2.ImportMeta = 3] = "ImportMeta", A2[A2.StaticSourcePhase = 4] = "StaticSourcePhase", A2[A2.DynamicSourcePhase = 5] = "DynamicSourcePhase", A2[A2.StaticDeferPhase = 6] = "StaticDeferPhase", A2[A2.DynamicDeferPhase = 7] = "DynamicDeferPhase";
    }(ImportType || (ImportType = {}));
    1 === new Uint8Array(new Uint16Array([1]).buffer)[0];
    E3 = /* @__PURE__ */ __name(() => {
      return A2 = "AGFzbQEAAAABKwhgAX8Bf2AEf39/fwBgAAF/YAAAYAF/AGADf39/AX9gAn9/AX9gA39/fwADMTAAAQECAgICAgICAgICAgICAgICAgIAAwMDBAQAAAUAAAAAAAMDAwAGAAAABwAGAgUEBQFwAQEBBQMBAAEGDwJ/AUHA8gALfwBBwPIACwd6FQZtZW1vcnkCAAJzYQAAAWUAAwJpcwAEAmllAAUCc3MABgJzZQAHAml0AAgCYWkACQJpZAAKAmlwAAsCZXMADAJlZQANA2VscwAOA2VsZQAPAnJpABACcmUAEQFmABICbXMAEwVwYXJzZQAUC19faGVhcF9iYXNlAwEKzkQwaAEBf0EAIAA2AoAKQQAoAtwJIgEgAEEBdGoiAEEAOwEAQQAgAEECaiIANgKECkEAIAA2AogKQQBBADYC4AlBAEEANgLwCUEAQQA2AugJQQBBADYC5AlBAEEANgL4CUEAQQA2AuwJIAEL0wEBA39BACgC8AkhBEEAQQAoAogKIgU2AvAJQQAgBDYC9AlBACAFQSRqNgKICiAEQSBqQeAJIAQbIAU2AgBBACgC1AkhBEEAKALQCSEGIAUgATYCACAFIAA2AgggBSACIAJBAmpBACAGIANGIgAbIAQgA0YiBBs2AgwgBSADNgIUIAVBADYCECAFIAI2AgQgBUEANgIgIAVBA0EBQQIgABsgBBs2AhwgBUEAKALQCSADRiICOgAYAkACQCACDQBBACgC1AkgA0cNAQtBAEEBOgCMCgsLXgEBf0EAKAL4CSIEQRBqQeQJIAQbQQAoAogKIgQ2AgBBACAENgL4CUEAIARBFGo2AogKQQBBAToAjAogBEEANgIQIAQgAzYCDCAEIAI2AgggBCABNgIEIAQgADYCAAsIAEEAKAKQCgsVAEEAKALoCSgCAEEAKALcCWtBAXULHgEBf0EAKALoCSgCBCIAQQAoAtwJa0EBdUF/IAAbCxUAQQAoAugJKAIIQQAoAtwJa0EBdQseAQF/QQAoAugJKAIMIgBBACgC3AlrQQF1QX8gABsLCwBBACgC6AkoAhwLHgEBf0EAKALoCSgCECIAQQAoAtwJa0EBdUF/IAAbCzsBAX8CQEEAKALoCSgCFCIAQQAoAtAJRw0AQX8PCwJAIABBACgC1AlHDQBBfg8LIABBACgC3AlrQQF1CwsAQQAoAugJLQAYCxUAQQAoAuwJKAIAQQAoAtwJa0EBdQsVAEEAKALsCSgCBEEAKALcCWtBAXULHgEBf0EAKALsCSgCCCIAQQAoAtwJa0EBdUF/IAAbCx4BAX9BACgC7AkoAgwiAEEAKALcCWtBAXVBfyAAGwslAQF/QQBBACgC6AkiAEEgakHgCSAAGygCACIANgLoCSAAQQBHCyUBAX9BAEEAKALsCSIAQRBqQeQJIAAbKAIAIgA2AuwJIABBAEcLCABBAC0AlAoLCABBAC0AjAoL3Q0BBX8jAEGA0ABrIgAkAEEAQQE6AJQKQQBBACgC2Ak2ApwKQQBBACgC3AlBfmoiATYCsApBACABQQAoAoAKQQF0aiICNgK0CkEAQQA6AIwKQQBBADsBlgpBAEEAOwGYCkEAQQA6AKAKQQBBADYCkApBAEEAOgD8CUEAIABBgBBqNgKkCkEAIAA2AqgKQQBBADoArAoCQAJAAkACQANAQQAgAUECaiIDNgKwCiABIAJPDQECQCADLwEAIgJBd2pBBUkNAAJAAkACQAJAAkAgAkGbf2oOBQEICAgCAAsgAkEgRg0EIAJBL0YNAyACQTtGDQIMBwtBAC8BmAoNASADEBVFDQEgAUEEakGCCEEKEC8NARAWQQAtAJQKDQFBAEEAKAKwCiIBNgKcCgwHCyADEBVFDQAgAUEEakGMCEEKEC8NABAXC0EAQQAoArAKNgKcCgwBCwJAIAEvAQQiA0EqRg0AIANBL0cNBBAYDAELQQEQGQtBACgCtAohAkEAKAKwCiEBDAALC0EAIQIgAyEBQQAtAPwJDQIMAQtBACABNgKwCkEAQQA6AJQKCwNAQQAgAUECaiIDNgKwCgJAAkACQAJAAkACQAJAIAFBACgCtApPDQAgAy8BACICQXdqQQVJDQYCQAJAAkACQAJAAkACQAJAAkACQCACQWBqDgoQDwYPDw8PBQECAAsCQAJAAkACQCACQaB/ag4KCxISAxIBEhISAgALIAJBhX9qDgMFEQYJC0EALwGYCg0QIAMQFUUNECABQQRqQYIIQQoQLw0QEBYMEAsgAxAVRQ0PIAFBBGpBjAhBChAvDQ8QFwwPCyADEBVFDQ4gASkABELsgISDsI7AOVINDiABLwEMIgNBd2oiAUEXSw0MQQEgAXRBn4CABHFFDQwMDQtBAEEALwGYCiIBQQFqOwGYCkEAKAKkCiABQQN0aiIBQQE2AgAgAUEAKAKcCjYCBAwNC0EALwGYCiIDRQ0JQQAgA0F/aiIDOwGYCkEALwGWCiICRQ0MQQAoAqQKIANB//8DcUEDdGooAgBBBUcNDAJAIAJBAnRBACgCqApqQXxqKAIAIgMoAgQNACADQQAoApwKQQJqNgIEC0EAIAJBf2o7AZYKIAMgAUEEajYCDAwMCwJAQQAoApwKIgEvAQBBKUcNAEEAKALwCSIDRQ0AIAMoAgQgAUcNAEEAQQAoAvQJIgM2AvAJAkAgA0UNACADQQA2AiAMAQtBAEEANgLgCQtBAEEALwGYCiIDQQFqOwGYCkEAKAKkCiADQQN0aiIDQQZBAkEALQCsChs2AgAgAyABNgIEQQBBADoArAoMCwtBAC8BmAoiAUUNB0EAIAFBf2oiATsBmApBACgCpAogAUH//wNxQQN0aigCAEEERg0EDAoLQScQGgwJC0EiEBoMCAsgAkEvRw0HAkACQCABLwEEIgFBKkYNACABQS9HDQEQGAwKC0EBEBkMCQsCQAJAAkACQEEAKAKcCiIBLwEAIgMQG0UNAAJAAkAgA0FVag4EAAkBAwkLIAFBfmovAQBBK0YNAwwICyABQX5qLwEAQS1GDQIMBwsgA0EpRw0BQQAoAqQKQQAvAZgKIgJBA3RqKAIEEBxFDQIMBgsgAUF+ai8BAEFQakH//wNxQQpPDQULQQAvAZgKIQILAkACQCACQf//A3EiAkUNACADQeYARw0AQQAoAqQKIAJBf2pBA3RqIgQoAgBBAUcNACABQX5qLwEAQe8ARw0BIAQoAgRBlghBAxAdRQ0BDAULIANB/QBHDQBBACgCpAogAkEDdGoiAigCBBAeDQQgAigCAEEGRg0ECyABEB8NAyADRQ0DIANBL0ZBAC0AoApBAEdxDQMCQEEAKAL4CSICRQ0AIAEgAigCAEkNACABIAIoAgRNDQQLIAFBfmohAUEAKALcCSECAkADQCABQQJqIgQgAk0NAUEAIAE2ApwKIAEvAQAhAyABQX5qIgQhASADECBFDQALIARBAmohBAsCQCADQf//A3EQIUUNACAEQX5qIQECQANAIAFBAmoiAyACTQ0BQQAgATYCnAogAS8BACEDIAFBfmoiBCEBIAMQIQ0ACyAEQQJqIQMLIAMQIg0EC0EAQQE6AKAKDAcLQQAoAqQKQQAvAZgKIgFBA3QiA2pBACgCnAo2AgRBACABQQFqOwGYCkEAKAKkCiADakEDNgIACxAjDAULQQAtAPwJQQAvAZYKQQAvAZgKcnJFIQIMBwsQJEEAQQA6AKAKDAMLECVBACECDAULIANBoAFHDQELQQBBAToArAoLQQBBACgCsAo2ApwKC0EAKAKwCiEBDAALCyAAQYDQAGokACACCxoAAkBBACgC3AkgAEcNAEEBDwsgAEF+ahAmC/4KAQZ/QQBBACgCsAoiAEEMaiIBNgKwCkEAKAL4CSECQQEQKSEDAkACQAJAAkACQAJAAkACQAJAQQAoArAKIgQgAUcNACADEChFDQELAkACQAJAAkACQAJAAkAgA0EqRg0AIANB+wBHDQFBACAEQQJqNgKwCkEBECkhA0EAKAKwCiEEA0ACQAJAIANB//8DcSIDQSJGDQAgA0EnRg0AIAMQLBpBACgCsAohAwwBCyADEBpBAEEAKAKwCkECaiIDNgKwCgtBARApGgJAIAQgAxAtIgNBLEcNAEEAQQAoArAKQQJqNgKwCkEBECkhAwsgA0H9AEYNA0EAKAKwCiIFIARGDQ8gBSEEIAVBACgCtApNDQAMDwsLQQAgBEECajYCsApBARApGkEAKAKwCiIDIAMQLRoMAgtBAEEAOgCUCgJAAkACQAJAAkACQCADQZ9/ag4MAgsEAQsDCwsLCwsFAAsgA0H2AEYNBAwKC0EAIARBDmoiAzYCsAoCQAJAAkBBARApQZ9/ag4GABICEhIBEgtBACgCsAoiBSkAAkLzgOSD4I3AMVINESAFLwEKECFFDRFBACAFQQpqNgKwCkEAECkaC0EAKAKwCiIFQQJqQbIIQQ4QLw0QIAUvARAiAkF3aiIBQRdLDQ1BASABdEGfgIAEcUUNDQwOC0EAKAKwCiIFKQACQuyAhIOwjsA5Ug0PIAUvAQoiAkF3aiIBQRdNDQYMCgtBACAEQQpqNgKwCkEAECkaQQAoArAKIQQLQQAgBEEQajYCsAoCQEEBECkiBEEqRw0AQQBBACgCsApBAmo2ArAKQQEQKSEEC0EAKAKwCiEDIAQQLBogA0EAKAKwCiIEIAMgBBACQQBBACgCsApBfmo2ArAKDwsCQCAEKQACQuyAhIOwjsA5Ug0AIAQvAQoQIEUNAEEAIARBCmo2ArAKQQEQKSEEQQAoArAKIQMgBBAsGiADQQAoArAKIgQgAyAEEAJBAEEAKAKwCkF+ajYCsAoPC0EAIARBBGoiBDYCsAoLQQAgBEEGajYCsApBAEEAOgCUCkEBECkhBEEAKAKwCiEDIAQQLCEEQQAoArAKIQIgBEHf/wNxIgFB2wBHDQNBACACQQJqNgKwCkEBECkhBUEAKAKwCiEDQQAhBAwEC0EAQQE6AIwKQQBBACgCsApBAmo2ArAKC0EBECkhBEEAKAKwCiEDAkAgBEHmAEcNACADQQJqQawIQQYQLw0AQQAgA0EIajYCsAogAEEBEClBABArIAJBEGpB5AkgAhshAwNAIAMoAgAiA0UNBSADQgA3AgggA0EQaiEDDAALC0EAIANBfmo2ArAKDAMLQQEgAXRBn4CABHFFDQMMBAtBASEECwNAAkACQCAEDgIAAQELIAVB//8DcRAsGkEBIQQMAQsCQAJAQQAoArAKIgQgA0YNACADIAQgAyAEEAJBARApIQQCQCABQdsARw0AIARBIHJB/QBGDQQLQQAoArAKIQMCQCAEQSxHDQBBACADQQJqNgKwCkEBECkhBUEAKAKwCiEDIAVBIHJB+wBHDQILQQAgA0F+ajYCsAoLIAFB2wBHDQJBACACQX5qNgKwCg8LQQAhBAwACwsPCyACQaABRg0AIAJB+wBHDQQLQQAgBUEKajYCsApBARApIgVB+wBGDQMMAgsCQCACQVhqDgMBAwEACyACQaABRw0CC0EAIAVBEGo2ArAKAkBBARApIgVBKkcNAEEAQQAoArAKQQJqNgKwCkEBECkhBQsgBUEoRg0BC0EAKAKwCiEBIAUQLBpBACgCsAoiBSABTQ0AIAQgAyABIAUQAkEAQQAoArAKQX5qNgKwCg8LIAQgA0EAQQAQAkEAIARBDGo2ArAKDwsQJQuFDAEKf0EAQQAoArAKIgBBDGoiATYCsApBARApIQJBACgCsAohAwJAAkACQAJAAkACQAJAAkAgAkEuRw0AQQAgA0ECajYCsAoCQEEBECkiAkHkAEYNAAJAIAJB8wBGDQAgAkHtAEcNB0EAKAKwCiICQQJqQZwIQQYQLw0HAkBBACgCnAoiAxAqDQAgAy8BAEEuRg0ICyAAIAAgAkEIakEAKALUCRABDwtBACgCsAoiAkECakGiCEEKEC8NBgJAQQAoApwKIgMQKg0AIAMvAQBBLkYNBwtBACEEQQAgAkEMajYCsApBASEFQQUhBkEBECkhAkEAIQdBASEIDAILQQAoArAKIgIpAAJC5YCYg9CMgDlSDQUCQEEAKAKcCiIDECoNACADLwEAQS5GDQYLQQAhBEEAIAJBCmo2ArAKQQIhCEEHIQZBASEHQQEQKSECQQEhBQwBCwJAAkACQAJAIAJB8wBHDQAgAyABTQ0AIANBAmpBoghBChAvDQACQCADLwEMIgRBd2oiB0EXSw0AQQEgB3RBn4CABHENAgsgBEGgAUYNAQtBACEHQQchBkEBIQQgAkHkAEYNAQwCC0EAIQRBACADQQxqIgI2ArAKQQEhBUEBECkhCQJAQQAoArAKIgYgAkYNAEHmACECAkAgCUHmAEYNAEEFIQZBACEHQQEhCCAJIQIMBAtBACEHQQEhCCAGQQJqQawIQQYQLw0EIAYvAQgQIEUNBAtBACEHQQAgAzYCsApBByEGQQEhBEEAIQVBACEIIAkhAgwCCyADIABBCmpNDQBBACEIQeQAIQICQCADKQACQuWAmIPQjIA5Ug0AAkACQCADLwEKIgRBd2oiB0EXSw0AQQEgB3RBn4CABHENAQtBACEIIARBoAFHDQELQQAhBUEAIANBCmo2ArAKQSohAkEBIQdBAiEIQQEQKSIJQSpGDQRBACADNgKwCkEBIQRBACEHQQAhCCAJIQIMAgsgAyEGQQAhBwwCC0EAIQVBACEICwJAIAJBKEcNAEEAKAKkCkEALwGYCiICQQN0aiIDQQAoArAKNgIEQQAgAkEBajsBmAogA0EFNgIAQQAoApwKLwEAQS5GDQRBAEEAKAKwCiIDQQJqNgKwCkEBECkhAiAAQQAoArAKQQAgAxABAkACQCAFDQBBACgC8AkhAQwBC0EAKALwCSIBIAY2AhwLQQBBAC8BlgoiA0EBajsBlgpBACgCqAogA0ECdGogATYCAAJAIAJBIkYNACACQSdGDQBBAEEAKAKwCkF+ajYCsAoPCyACEBpBAEEAKAKwCkECaiICNgKwCgJAAkACQEEBEClBV2oOBAECAgACC0EAQQAoArAKQQJqNgKwCkEBECkaQQAoAvAJIgMgAjYCBCADQQE6ABggA0EAKAKwCiICNgIQQQAgAkF+ajYCsAoPC0EAKALwCSIDIAI2AgQgA0EBOgAYQQBBAC8BmApBf2o7AZgKIANBACgCsApBAmo2AgxBAEEALwGWCkF/ajsBlgoPC0EAQQAoArAKQX5qNgKwCg8LAkAgBEEBcyACQfsAR3INAEEAKAKwCiECQQAvAZgKDQUDQAJAAkACQCACQQAoArQKTw0AQQEQKSICQSJGDQEgAkEnRg0BIAJB/QBHDQJBAEEAKAKwCkECajYCsAoLQQEQKSEDQQAoArAKIQICQCADQeYARw0AIAJBAmpBrAhBBhAvDQcLQQAgAkEIajYCsAoCQEEBECkiAkEiRg0AIAJBJ0cNBwsgACACQQAQKw8LIAIQGgtBAEEAKAKwCkECaiICNgKwCgwACwsCQAJAIAJBWWoOBAMBAQMACyACQSJGDQILQQAoArAKIQYLIAYgAUcNAEEAIABBCmo2ArAKDwsgAkEqRyAHcQ0DQQAvAZgKQf//A3ENA0EAKAKwCiECQQAoArQKIQEDQCACIAFPDQECQAJAIAIvAQAiA0EnRg0AIANBIkcNAQsgACADIAgQKw8LQQAgAkECaiICNgKwCgwACwsQJQsPC0EAIAJBfmo2ArAKDwtBAEEAKAKwCkF+ajYCsAoLRwEDf0EAKAKwCkECaiEAQQAoArQKIQECQANAIAAiAkF+aiABTw0BIAJBAmohACACLwEAQXZqDgQBAAABAAsLQQAgAjYCsAoLmAEBA39BAEEAKAKwCiIBQQJqNgKwCiABQQZqIQFBACgCtAohAgNAAkACQAJAIAFBfGogAk8NACABQX5qLwEAIQMCQAJAIAANACADQSpGDQEgA0F2ag4EAgQEAgQLIANBKkcNAwsgAS8BAEEvRw0CQQAgAUF+ajYCsAoMAQsgAUF+aiEBC0EAIAE2ArAKDwsgAUECaiEBDAALC4gBAQR/QQAoArAKIQFBACgCtAohAgJAAkADQCABIgNBAmohASADIAJPDQEgAS8BACIEIABGDQICQCAEQdwARg0AIARBdmoOBAIBAQIBCyADQQRqIQEgAy8BBEENRw0AIANBBmogASADLwEGQQpGGyEBDAALC0EAIAE2ArAKECUPC0EAIAE2ArAKC2wBAX8CQAJAIABBX2oiAUEFSw0AQQEgAXRBMXENAQsgAEFGakH//wNxQQZJDQAgAEEpRyAAQVhqQf//A3FBB0lxDQACQCAAQaV/ag4EAQAAAQALIABB/QBHIABBhX9qQf//A3FBBElxDwtBAQsuAQF/QQEhAQJAIABBpglBBRAdDQAgAEGWCEEDEB0NACAAQbAJQQIQHSEBCyABC0YBA39BACEDAkAgACACQQF0IgJrIgRBAmoiAEEAKALcCSIFSQ0AIAAgASACEC8NAAJAIAAgBUcNAEEBDwsgBBAmIQMLIAMLgwEBAn9BASEBAkACQAJAAkACQAJAIAAvAQAiAkFFag4EBQQEAQALAkAgAkGbf2oOBAMEBAIACyACQSlGDQQgAkH5AEcNAyAAQX5qQbwJQQYQHQ8LIABBfmovAQBBPUYPCyAAQX5qQbQJQQQQHQ8LIABBfmpByAlBAxAdDwtBACEBCyABC7QDAQJ/QQAhAQJAAkACQAJAAkACQAJAAkACQAJAIAAvAQBBnH9qDhQAAQIJCQkJAwkJBAUJCQYJBwkJCAkLAkACQCAAQX5qLwEAQZd/ag4EAAoKAQoLIABBfGpByghBAhAdDwsgAEF8akHOCEEDEB0PCwJAAkACQCAAQX5qLwEAQY1/ag4DAAECCgsCQCAAQXxqLwEAIgJB4QBGDQAgAkHsAEcNCiAAQXpqQeUAECcPCyAAQXpqQeMAECcPCyAAQXxqQdQIQQQQHQ8LIABBfGpB3AhBBhAdDwsgAEF+ai8BAEHvAEcNBiAAQXxqLwEAQeUARw0GAkAgAEF6ai8BACICQfAARg0AIAJB4wBHDQcgAEF4akHoCEEGEB0PCyAAQXhqQfQIQQIQHQ8LIABBfmpB+AhBBBAdDwtBASEBIABBfmoiAEHpABAnDQQgAEGACUEFEB0PCyAAQX5qQeQAECcPCyAAQX5qQYoJQQcQHQ8LIABBfmpBmAlBBBAdDwsCQCAAQX5qLwEAIgJB7wBGDQAgAkHlAEcNASAAQXxqQe4AECcPCyAAQXxqQaAJQQMQHSEBCyABCzQBAX9BASEBAkAgAEF3akH//wNxQQVJDQAgAEGAAXJBoAFGDQAgAEEuRyAAEChxIQELIAELMAEBfwJAAkAgAEF3aiIBQRdLDQBBASABdEGNgIAEcQ0BCyAAQaABRg0AQQAPC0EBC04BAn9BACEBAkACQCAALwEAIgJB5QBGDQAgAkHrAEcNASAAQX5qQfgIQQQQHQ8LIABBfmovAQBB9QBHDQAgAEF8akHcCEEGEB0hAQsgAQveAQEEf0EAKAKwCiEAQQAoArQKIQECQAJAAkADQCAAIgJBAmohACACIAFPDQECQAJAAkAgAC8BACIDQaR/ag4FAgMDAwEACyADQSRHDQIgAi8BBEH7AEcNAkEAIAJBBGoiADYCsApBAEEALwGYCiICQQFqOwGYCkEAKAKkCiACQQN0aiICQQQ2AgAgAiAANgIEDwtBACAANgKwCkEAQQAvAZgKQX9qIgA7AZgKQQAoAqQKIABB//8DcUEDdGooAgBBA0cNAwwECyACQQRqIQAMAAsLQQAgADYCsAoLECULC3ABAn8CQAJAA0BBAEEAKAKwCiIAQQJqIgE2ArAKIABBACgCtApPDQECQAJAAkAgAS8BACIBQaV/ag4CAQIACwJAIAFBdmoOBAQDAwQACyABQS9HDQIMBAsQLhoMAQtBACAAQQRqNgKwCgwACwsQJQsLNQEBf0EAQQE6APwJQQAoArAKIQBBAEEAKAK0CkECajYCsApBACAAQQAoAtwJa0EBdTYCkAoLQwECf0EBIQECQCAALwEAIgJBd2pB//8DcUEFSQ0AIAJBgAFyQaABRg0AQQAhASACEChFDQAgAkEuRyAAECpyDwsgAQs9AQJ/QQAhAgJAQQAoAtwJIgMgAEsNACAALwEAIAFHDQACQCADIABHDQBBAQ8LIABBfmovAQAQICECCyACC2gBAn9BASEBAkACQCAAQV9qIgJBBUsNAEEBIAJ0QTFxDQELIABB+P8DcUEoRg0AIABBRmpB//8DcUEGSQ0AAkAgAEGlf2oiAkEDSw0AIAJBAUcNAQsgAEGFf2pB//8DcUEESSEBCyABC5wBAQN/QQAoArAKIQECQANAAkACQCABLwEAIgJBL0cNAAJAIAEvAQIiAUEqRg0AIAFBL0cNBBAYDAILIAAQGQwBCwJAAkAgAEUNACACQXdqIgFBF0sNAUEBIAF0QZ+AgARxRQ0BDAILIAIQIUUNAwwBCyACQaABRw0CC0EAQQAoArAKIgNBAmoiATYCsAogA0EAKAK0CkkNAAsLIAILMQEBf0EAIQECQCAALwEAQS5HDQAgAEF+ai8BAEEuRw0AIABBfGovAQBBLkYhAQsgAQumBAEBfwJAIAFBIkYNACABQSdGDQAQJQ8LQQAoArAKIQMgARAaIAAgA0ECakEAKAKwCkEAKALQCRABAkAgAkEBSA0AQQAoAvAJQQRBBiACQQFGGzYCHAtBAEEAKAKwCkECajYCsAoCQAJAAkACQEEAECkiAUHhAEYNACABQfcARg0BQQAoArAKIQEMAgtBACgCsAoiAUECakHACEEKEC8NAUEGIQIMAgtBACgCsAoiAS8BAkHpAEcNACABLwEEQfQARw0AQQQhAiABLwEGQegARg0BC0EAIAFBfmo2ArAKDwtBACABIAJBAXRqNgKwCgJAQQEQKUH7AEYNAEEAIAE2ArAKDwtBACgCsAoiACECA0BBACACQQJqNgKwCgJAAkACQEEBECkiAkEiRg0AIAJBJ0cNAUEnEBpBAEEAKAKwCkECajYCsApBARApIQIMAgtBIhAaQQBBACgCsApBAmo2ArAKQQEQKSECDAELIAIQLCECCwJAIAJBOkYNAEEAIAE2ArAKDwtBAEEAKAKwCkECajYCsAoCQEEBECkiAkEiRg0AIAJBJ0YNAEEAIAE2ArAKDwsgAhAaQQBBACgCsApBAmo2ArAKAkACQEEBECkiAkEsRg0AIAJB/QBGDQFBACABNgKwCg8LQQBBACgCsApBAmo2ArAKQQEQKUH9AEYNAEEAKAKwCiECDAELC0EAKALwCSIBIAA2AhAgAUEAKAKwCkECajYCDAttAQJ/AkACQANAAkAgAEH//wNxIgFBd2oiAkEXSw0AQQEgAnRBn4CABHENAgsgAUGgAUYNASAAIQIgARAoDQJBACECQQBBACgCsAoiAEECajYCsAogAC8BAiIADQAMAgsLIAAhAgsgAkH//wNxC6sBAQR/AkACQEEAKAKwCiICLwEAIgNB4QBGDQAgASEEIAAhBQwBC0EAIAJBBGo2ArAKQQEQKSECQQAoArAKIQUCQAJAIAJBIkYNACACQSdGDQAgAhAsGkEAKAKwCiEEDAELIAIQGkEAQQAoArAKQQJqIgQ2ArAKC0EBECkhA0EAKAKwCiECCwJAIAIgBUYNACAFIARBACAAIAAgAUYiAhtBACABIAIbEAILIAMLcgEEf0EAKAKwCiEAQQAoArQKIQECQAJAA0AgAEECaiECIAAgAU8NAQJAAkAgAi8BACIDQaR/ag4CAQQACyACIQAgA0F2ag4EAgEBAgELIABBBGohAAwACwtBACACNgKwChAlQQAPC0EAIAI2ArAKQd0AC0kBA39BACEDAkAgAkUNAAJAA0AgAC0AACIEIAEtAAAiBUcNASABQQFqIQEgAEEBaiEAIAJBf2oiAg0ADAILCyAEIAVrIQMLIAMLC+wBAgBBgAgLzgEAAHgAcABvAHIAdABtAHAAbwByAHQAZgBvAHIAZQB0AGEAbwB1AHIAYwBlAHIAbwBtAHUAbgBjAHQAaQBvAG4AcwBzAGUAcgB0AHYAbwB5AGkAZQBkAGUAbABlAGMAbwBuAHQAaQBuAGkAbgBzAHQAYQBuAHQAeQBiAHIAZQBhAHIAZQB0AHUAcgBkAGUAYgB1AGcAZwBlAGEAdwBhAGkAdABoAHIAdwBoAGkAbABlAGkAZgBjAGEAdABjAGYAaQBuAGEAbABsAGUAbABzAABB0AkLEAEAAAACAAAAAAQAAEA5AAA=", "undefined" != typeof Buffer ? Buffer.from(A2, "base64") : Uint8Array.from(atob(A2), (A3) => A3.charCodeAt(0));
      var A2;
    }, "E");
    WebAssembly.compile(E3()).then(WebAssembly.instantiate).then(({ exports: A2 }) => {
    });
    DevalueError = class extends Error {
      static {
        __name(this, "DevalueError");
      }
      /**
       * @param {string} message
       * @param {string[]} keys
       */
      constructor(message, keys) {
        super(message);
        this.name = "DevalueError";
        this.path = keys.join("");
      }
    };
    __name(is_primitive, "is_primitive");
    object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
      Object.prototype
    ).sort().join("\0");
    __name(is_plain_object, "is_plain_object");
    __name(get_type, "get_type");
    __name(get_escaped_char, "get_escaped_char");
    __name(stringify_string, "stringify_string");
    __name(enumerable_symbols, "enumerable_symbols");
    is_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    __name(stringify_key, "stringify_key");
    __name(stringify, "stringify");
    __name(stringify_primitive, "stringify_primitive");
    ACTION_QUERY_PARAMS$1 = {
      actionName: "_action"
    };
    ACTION_RPC_ROUTE_PATTERN = "/_actions/[...path]";
    __vite_import_meta_env__ = { "ASSETS_PREFIX": void 0, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_MAPBOX_TOKEN": "pk.eyJ1IjoidHJ1bWFuY3JlYXRpdmUiLCJhIjoiY202aHpsajNoMDM0bzJ2b2lpYjI5ZnFydyJ9.CGWu38rYGzImdfVfldaugQ", "SITE": void 0, "SSR": true };
    ACTION_QUERY_PARAMS = ACTION_QUERY_PARAMS$1;
    codeToStatusMap = {
      // Implemented from tRPC error code table
      // https://trpc.io/docs/server/error-handling#error-codes
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      FORBIDDEN: 403,
      NOT_FOUND: 404,
      TIMEOUT: 405,
      CONFLICT: 409,
      PRECONDITION_FAILED: 412,
      PAYLOAD_TOO_LARGE: 413,
      UNSUPPORTED_MEDIA_TYPE: 415,
      UNPROCESSABLE_CONTENT: 422,
      TOO_MANY_REQUESTS: 429,
      CLIENT_CLOSED_REQUEST: 499,
      INTERNAL_SERVER_ERROR: 500
    };
    statusToCodeMap = Object.entries(codeToStatusMap).reduce(
      // reverse the key-value pairs
      (acc, [key, value]) => ({ ...acc, [value]: key }),
      {}
    );
    ActionError = class _ActionError extends Error {
      static {
        __name(this, "ActionError");
      }
      type = "AstroActionError";
      code = "INTERNAL_SERVER_ERROR";
      status = 500;
      constructor(params) {
        super(params.message);
        this.code = params.code;
        this.status = _ActionError.codeToStatus(params.code);
        if (params.stack) {
          this.stack = params.stack;
        }
      }
      static codeToStatus(code) {
        return codeToStatusMap[code];
      }
      static statusToCode(status) {
        return statusToCodeMap[status] ?? "INTERNAL_SERVER_ERROR";
      }
      static fromJson(body) {
        if (isInputError(body)) {
          return new ActionInputError(body.issues);
        }
        if (isActionError(body)) {
          return new _ActionError(body);
        }
        return new _ActionError({
          code: "INTERNAL_SERVER_ERROR"
        });
      }
    };
    __name(isActionError, "isActionError");
    __name(isInputError, "isInputError");
    ActionInputError = class extends ActionError {
      static {
        __name(this, "ActionInputError");
      }
      type = "AstroActionInputError";
      // We don't expose all ZodError properties.
      // Not all properties will serialize from server to client,
      // and we don't want to import the full ZodError object into the client.
      issues;
      fields;
      constructor(issues) {
        super({
          message: `Failed to validate: ${JSON.stringify(issues, null, 2)}`,
          code: "BAD_REQUEST"
        });
        this.issues = issues;
        this.fields = {};
        for (const issue of issues) {
          if (issue.path.length > 0) {
            const key = issue.path[0].toString();
            this.fields[key] ??= [];
            this.fields[key]?.push(issue.message);
          }
        }
      }
    };
    __name(getActionQueryString, "getActionQueryString");
    __name(serializeActionResult, "serializeActionResult");
    __name(deserializeActionResult, "deserializeActionResult");
    actionResultErrorStack = /* @__PURE__ */ (/* @__PURE__ */ __name(function actionResultErrorStackFn() {
      let errorStack;
      return {
        set(stack) {
          errorStack = stack;
        },
        get() {
          return errorStack;
        }
      };
    }, "actionResultErrorStackFn"))();
    dist = {};
    __name(requireDist, "requireDist");
    distExports = requireDist();
    __name(template, "template");
    DEFAULT_404_ROUTE = {
      component: DEFAULT_404_COMPONENT,
      generate: /* @__PURE__ */ __name(() => "", "generate"),
      params: [],
      pattern: /\/404/,
      prerender: false,
      pathname: "/404",
      segments: [[{ content: "404", dynamic: false, spread: false }]],
      type: "page",
      route: "/404",
      fallbackRoutes: [],
      isIndex: false,
      origin: "internal"
    };
    __name(ensure404Route, "ensure404Route");
    __name(default404Page, "default404Page");
    default404Page.isAstroComponentFactory = true;
    default404Instance = {
      default: default404Page
    };
  }
});

// .wrangler/tmp/pages-aJ3rp1/chunks/index_DfvzXTkm.mjs
function hasContentType(contentType, expected) {
  const type = contentType.split(";")[0].toLowerCase();
  return expected.some((t) => type === t);
}
function hasActionPayload(locals) {
  return "_actionPayload" in locals;
}
function createGetActionResult(locals) {
  return (actionFn) => {
    if (!hasActionPayload(locals) || actionFn.toString() !== getActionQueryString(locals._actionPayload.actionName)) {
      return void 0;
    }
    return deserializeActionResult(locals._actionPayload.actionResult);
  };
}
function createCallAction(context3) {
  return (baseAction, input) => {
    Reflect.set(context3, ACTION_API_CONTEXT_SYMBOL, true);
    const action = baseAction.bind(context3);
    return action(input);
  };
}
function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
    }
  }
}
function redirectIsExternal(redirect) {
  if (typeof redirect === "string") {
    return redirect.startsWith("http://") || redirect.startsWith("https://");
  } else {
    return redirect.destination.startsWith("http://") || redirect.destination.startsWith("https://");
  }
}
async function renderRedirect(renderContext) {
  const {
    request: { method },
    routeData
  } = renderContext;
  const { redirect, redirectRoute } = routeData;
  const status = redirectRoute && typeof redirect === "object" ? redirect.status : method === "GET" ? 301 : 308;
  const headers = { location: encodeURI(redirectRouteGenerate(renderContext)) };
  if (redirect && redirectIsExternal(redirect)) {
    if (typeof redirect === "string") {
      return Response.redirect(redirect, status);
    } else {
      return Response.redirect(redirect.destination, status);
    }
  }
  return new Response(null, { status, headers });
}
function redirectRouteGenerate(renderContext) {
  const {
    params,
    routeData: { redirect, redirectRoute }
  } = renderContext;
  if (typeof redirectRoute !== "undefined") {
    return redirectRoute?.generate(params) || redirectRoute?.pathname || "/";
  } else if (typeof redirect === "string") {
    if (redirectIsExternal(redirect)) {
      return redirect;
    } else {
      let target = redirect;
      for (const param of Object.keys(params)) {
        const paramValue = params[param];
        target = target.replace(`[${param}]`, paramValue).replace(`[...${param}]`, paramValue);
      }
      return target;
    }
  } else if (typeof redirect === "undefined") {
    return "/";
  }
  return redirect.destination;
}
function badRequest(reason) {
  return new Response(null, {
    status: 400,
    statusText: "Bad request: " + reason
  });
}
async function getRequestData(request) {
  switch (request.method) {
    case "GET": {
      const url = new URL(request.url);
      const params = url.searchParams;
      if (!params.has("s") || !params.has("e") || !params.has("p")) {
        return badRequest("Missing required query parameters.");
      }
      const rawSlots = params.get("s");
      try {
        return {
          componentExport: params.get("e"),
          encryptedProps: params.get("p"),
          slots: JSON.parse(rawSlots)
        };
      } catch {
        return badRequest("Invalid slots format.");
      }
    }
    case "POST": {
      try {
        const raw = await request.text();
        const data = JSON.parse(raw);
        return data;
      } catch {
        return badRequest("Request format is invalid.");
      }
    }
    default: {
      return new Response(null, { status: 405 });
    }
  }
}
function createEndpoint(manifest2) {
  const page = /* @__PURE__ */ __name(async (result) => {
    const params = result.params;
    if (!params.name) {
      return new Response(null, {
        status: 400,
        statusText: "Bad request"
      });
    }
    const componentId = params.name;
    const data = await getRequestData(result.request);
    if (data instanceof Response) {
      return data;
    }
    const imp = manifest2.serverIslandMap?.get(componentId);
    if (!imp) {
      return new Response(null, {
        status: 404,
        statusText: "Not found"
      });
    }
    const key = await manifest2.key;
    const encryptedProps = data.encryptedProps;
    const propString = encryptedProps === "" ? "{}" : await decryptString(key, encryptedProps);
    const props = JSON.parse(propString);
    const componentModule = await imp();
    let Component = componentModule[data.componentExport];
    const slots = {};
    for (const prop in data.slots) {
      slots[prop] = createSlotValueFromString(data.slots[prop]);
    }
    result.response.headers.set("X-Robots-Tag", "noindex");
    if (isAstroComponentFactory(Component)) {
      const ServerIsland = Component;
      Component = /* @__PURE__ */ __name(function(...args) {
        return ServerIsland.apply(this, args);
      }, "Component");
      Object.assign(Component, ServerIsland);
      Component.propagation = "self";
    }
    return renderTemplate`${renderComponent(result, "Component", Component, props, slots)}`;
  }, "page");
  page.isAstroComponentFactory = true;
  const instance = {
    default: page,
    partial: true
  };
  return instance;
}
function matchRoute(pathname, manifest2) {
  return manifest2.routes.find((route) => {
    return route.pattern.test(pathname) || route.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(pathname));
  });
}
function isRoute404(route) {
  return ROUTE404_RE.test(route);
}
function isRoute500(route) {
  return ROUTE500_RE.test(route);
}
function isRoute404or500(route) {
  return isRoute404(route.route) || isRoute500(route.route);
}
function isRouteServerIsland(route) {
  return route.component === SERVER_ISLAND_COMPONENT;
}
function isRequestServerIsland(request, base = "") {
  const url = new URL(request.url);
  const pathname = base === "/" ? url.pathname.slice(base.length) : url.pathname.slice(base.length + 1);
  return pathname.startsWith(SERVER_ISLAND_BASE_PREFIX);
}
function requestIs404Or500(request, base = "") {
  const url = new URL(request.url);
  const pathname = url.pathname.slice(base.length);
  return isRoute404(pathname) || isRoute500(pathname);
}
function isRouteExternalRedirect(route) {
  return !!(route.type === "redirect" && route.redirect && redirectIsExternal(route.redirect));
}
function requestHasLocale(locales) {
  return function(context3) {
    return pathHasLocale(context3.url.pathname, locales);
  };
}
function pathHasLocale(path, locales) {
  const segments = path.split("/");
  for (const segment of segments) {
    for (const locale of locales) {
      if (typeof locale === "string") {
        if (normalizeTheLocale(segment) === normalizeTheLocale(locale)) {
          return true;
        }
      } else if (segment === locale.path) {
        return true;
      }
    }
  }
  return false;
}
function getPathByLocale(locale, locales) {
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      if (loopLocale === locale) {
        return loopLocale;
      }
    } else {
      for (const code of loopLocale.codes) {
        if (code === locale) {
          return loopLocale.path;
        }
      }
    }
  }
  throw new AstroError(i18nNoLocaleFoundInPath);
}
function normalizeTheLocale(locale) {
  return locale.replaceAll("_", "-").toLowerCase();
}
function getAllCodes(locales) {
  const result = [];
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      result.push(loopLocale);
    } else {
      result.push(...loopLocale.codes);
    }
  }
  return result;
}
function redirectToDefaultLocale({
  trailingSlash,
  format,
  base,
  defaultLocale
}) {
  return function(context3, statusCode) {
    if (shouldAppendForwardSlash(trailingSlash, format)) {
      return context3.redirect(`${appendForwardSlash(joinPaths(base, defaultLocale))}`, statusCode);
    } else {
      return context3.redirect(`${joinPaths(base, defaultLocale)}`, statusCode);
    }
  };
}
function notFound({ base, locales, fallback }) {
  return function(context3, response) {
    if (response?.headers.get(REROUTE_DIRECTIVE_HEADER) === "no" && typeof fallback === "undefined") {
      return response;
    }
    const url = context3.url;
    const isRoot = url.pathname === base + "/" || url.pathname === base;
    if (!(isRoot || pathHasLocale(url.pathname, locales))) {
      if (response) {
        response.headers.set(REROUTE_DIRECTIVE_HEADER, "no");
        return new Response(response.body, {
          status: 404,
          headers: response.headers
        });
      } else {
        return new Response(null, {
          status: 404,
          headers: {
            [REROUTE_DIRECTIVE_HEADER]: "no"
          }
        });
      }
    }
    return void 0;
  };
}
function redirectToFallback({
  fallback,
  locales,
  defaultLocale,
  strategy,
  base,
  fallbackType
}) {
  return async function(context3, response) {
    if (response.status >= 300 && fallback) {
      const fallbackKeys = fallback ? Object.keys(fallback) : [];
      const segments = context3.url.pathname.split("/");
      const urlLocale = segments.find((segment) => {
        for (const locale of locales) {
          if (typeof locale === "string") {
            if (locale === segment) {
              return true;
            }
          } else if (locale.path === segment) {
            return true;
          }
        }
        return false;
      });
      if (urlLocale && fallbackKeys.includes(urlLocale)) {
        const fallbackLocale = fallback[urlLocale];
        const pathFallbackLocale = getPathByLocale(fallbackLocale, locales);
        let newPathname;
        if (pathFallbackLocale === defaultLocale && strategy === "pathname-prefix-other-locales") {
          if (context3.url.pathname.includes(`${base}`)) {
            newPathname = context3.url.pathname.replace(`/${urlLocale}`, ``);
          } else {
            newPathname = context3.url.pathname.replace(`/${urlLocale}`, `/`);
          }
        } else {
          newPathname = context3.url.pathname.replace(`/${urlLocale}`, `/${pathFallbackLocale}`);
        }
        if (fallbackType === "rewrite") {
          return await context3.rewrite(newPathname + context3.url.search);
        } else {
          return context3.redirect(newPathname + context3.url.search);
        }
      }
    }
    return response;
  };
}
function parseLocale(header) {
  if (header === "*") {
    return [{ locale: header, qualityValue: void 0 }];
  }
  const result = [];
  const localeValues = header.split(",").map((str) => str.trim());
  for (const localeValue of localeValues) {
    const split = localeValue.split(";").map((str) => str.trim());
    const localeName = split[0];
    const qualityValue = split[1];
    if (!split) {
      continue;
    }
    if (qualityValue && qualityValue.startsWith("q=")) {
      const qualityValueAsFloat = Number.parseFloat(qualityValue.slice("q=".length));
      if (Number.isNaN(qualityValueAsFloat) || qualityValueAsFloat > 1) {
        result.push({
          locale: localeName,
          qualityValue: void 0
        });
      } else {
        result.push({
          locale: localeName,
          qualityValue: qualityValueAsFloat
        });
      }
    } else {
      result.push({
        locale: localeName,
        qualityValue: void 0
      });
    }
  }
  return result;
}
function sortAndFilterLocales(browserLocaleList, locales) {
  const normalizedLocales = getAllCodes(locales).map(normalizeTheLocale);
  return browserLocaleList.filter((browserLocale) => {
    if (browserLocale.locale !== "*") {
      return normalizedLocales.includes(normalizeTheLocale(browserLocale.locale));
    }
    return true;
  }).sort((a, b) => {
    if (a.qualityValue && b.qualityValue) {
      return Math.sign(b.qualityValue - a.qualityValue);
    }
    return 0;
  });
}
function computePreferredLocale(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = void 0;
  if (acceptHeader) {
    const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
    const firstResult = browserLocaleList.at(0);
    if (firstResult && firstResult.locale !== "*") {
      for (const currentLocale of locales) {
        if (typeof currentLocale === "string") {
          if (normalizeTheLocale(currentLocale) === normalizeTheLocale(firstResult.locale)) {
            result = currentLocale;
            break;
          }
        } else {
          for (const currentCode of currentLocale.codes) {
            if (normalizeTheLocale(currentCode) === normalizeTheLocale(firstResult.locale)) {
              result = currentCode;
              break;
            }
          }
        }
      }
    }
  }
  return result;
}
function computePreferredLocaleList(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = [];
  if (acceptHeader) {
    const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
    if (browserLocaleList.length === 1 && browserLocaleList.at(0).locale === "*") {
      return getAllCodes(locales);
    } else if (browserLocaleList.length > 0) {
      for (const browserLocale of browserLocaleList) {
        for (const loopLocale of locales) {
          if (typeof loopLocale === "string") {
            if (normalizeTheLocale(loopLocale) === normalizeTheLocale(browserLocale.locale)) {
              result.push(loopLocale);
            }
          } else {
            for (const code of loopLocale.codes) {
              if (code === browserLocale.locale) {
                result.push(code);
              }
            }
          }
        }
      }
    }
  }
  return result;
}
function computeCurrentLocale(pathname, locales, defaultLocale) {
  for (const segment of pathname.split("/")) {
    for (const locale of locales) {
      if (typeof locale === "string") {
        if (!segment.includes(locale)) continue;
        if (normalizeTheLocale(locale) === normalizeTheLocale(segment)) {
          return locale;
        }
      } else {
        if (locale.path === segment) {
          return locale.codes.at(0);
        } else {
          for (const code of locale.codes) {
            if (normalizeTheLocale(code) === normalizeTheLocale(segment)) {
              return code;
            }
          }
        }
      }
    }
  }
  for (const locale of locales) {
    if (typeof locale === "string") {
      if (locale === defaultLocale) {
        return locale;
      }
    } else {
      if (locale.path === defaultLocale) {
        return locale.codes.at(0);
      }
    }
  }
}
function attachCookiesToResponse(response, cookies) {
  Reflect.set(response, astroCookiesSymbol, cookies);
}
function getCookiesFromResponse(response) {
  let cookies = Reflect.get(response, astroCookiesSymbol);
  if (cookies != null) {
    return cookies;
  } else {
    return void 0;
  }
}
function* getSetCookiesFromResponse(response) {
  const cookies = getCookiesFromResponse(response);
  if (!cookies) {
    return [];
  }
  for (const headerValue of AstroCookies.consume(cookies)) {
    yield headerValue;
  }
  return [];
}
function createRequest({
  url,
  headers,
  method = "GET",
  body = void 0,
  logger,
  isPrerendered = false,
  routePattern,
  init: init2
}) {
  const headersObj = isPrerendered ? void 0 : headers instanceof Headers ? headers : new Headers(
    // Filter out HTTP/2 pseudo-headers. These are internally-generated headers added to all HTTP/2 requests with trusted metadata about the request.
    // Examples include `:method`, `:scheme`, `:authority`, and `:path`.
    // They are always prefixed with a colon to distinguish them from other headers, and it is an error to add the to a Headers object manually.
    // See https://httpwg.org/specs/rfc7540.html#HttpRequest
    Object.entries(headers).filter(([name]) => !name.startsWith(":"))
  );
  if (typeof url === "string") url = new URL(url);
  if (isPrerendered) {
    url.search = "";
  }
  const request = new Request(url, {
    method,
    headers: headersObj,
    // body is made available only if the request is for a page that will be on-demand rendered
    body: isPrerendered ? null : body,
    ...init2
  });
  if (isPrerendered) {
    let _headers = request.headers;
    const { value, writable, ...headersDesc } = Object.getOwnPropertyDescriptor(request, "headers") || {};
    Object.defineProperty(request, "headers", {
      ...headersDesc,
      get() {
        logger.warn(
          null,
          `\`Astro.request.headers\` was used when rendering the route \`${routePattern}'\`. \`Astro.request.headers\` is not available on prerendered pages. If you need access to request headers, make sure that the page is server-rendered using \`export const prerender = false;\` or by setting \`output\` to \`"server"\` in your Astro config to make all your pages server-rendered by default.`
        );
        return _headers;
      },
      set(newHeaders) {
        _headers = newHeaders;
      }
    });
  }
  return request;
}
function findRouteToRewrite({
  payload,
  routes: routes2,
  request,
  trailingSlash,
  buildFormat,
  base
}) {
  let newUrl = void 0;
  if (payload instanceof URL) {
    newUrl = payload;
  } else if (payload instanceof Request) {
    newUrl = new URL(payload.url);
  } else {
    newUrl = new URL(payload, new URL(request.url).origin);
  }
  let pathname = newUrl.pathname;
  const shouldAppendSlash = shouldAppendForwardSlash(trailingSlash, buildFormat);
  if (base !== "/") {
    const isBasePathRequest = newUrl.pathname === base || newUrl.pathname === removeTrailingForwardSlash(base);
    if (isBasePathRequest) {
      pathname = shouldAppendSlash ? "/" : "";
    } else if (newUrl.pathname.startsWith(base)) {
      pathname = shouldAppendSlash ? appendForwardSlash(newUrl.pathname) : removeTrailingForwardSlash(newUrl.pathname);
      pathname = pathname.slice(base.length);
    }
  }
  if (!pathname.startsWith("/") && shouldAppendSlash && newUrl.pathname.endsWith("/")) {
    pathname = prependForwardSlash(pathname);
  }
  if (pathname === "/" && base !== "/" && !shouldAppendSlash) {
    pathname = "";
  }
  if (base !== "/" && (pathname === "" || pathname === "/") && !shouldAppendSlash) {
    newUrl.pathname = removeTrailingForwardSlash(base);
  } else {
    newUrl.pathname = joinPaths(...[base, pathname].filter(Boolean));
  }
  const decodedPathname = decodeURI(pathname);
  let foundRoute;
  for (const route of routes2) {
    if (route.pattern.test(decodedPathname)) {
      foundRoute = route;
      break;
    }
  }
  if (foundRoute) {
    return {
      routeData: foundRoute,
      newUrl,
      pathname: decodedPathname
    };
  } else {
    const custom404 = routes2.find((route) => route.route === "/404");
    if (custom404) {
      return { routeData: custom404, newUrl, pathname };
    } else {
      return { routeData: DEFAULT_404_ROUTE, newUrl, pathname };
    }
  }
}
function copyRequest(newUrl, oldRequest, isPrerendered, logger, routePattern) {
  if (oldRequest.bodyUsed) {
    throw new AstroError(RewriteWithBodyUsed);
  }
  return createRequest({
    url: newUrl,
    method: oldRequest.method,
    body: oldRequest.body,
    isPrerendered,
    logger,
    headers: isPrerendered ? {} : oldRequest.headers,
    routePattern,
    init: {
      referrer: oldRequest.referrer,
      referrerPolicy: oldRequest.referrerPolicy,
      mode: oldRequest.mode,
      credentials: oldRequest.credentials,
      cache: oldRequest.cache,
      redirect: oldRequest.redirect,
      integrity: oldRequest.integrity,
      signal: oldRequest.signal,
      keepalive: oldRequest.keepalive,
      // https://fetch.spec.whatwg.org/#dom-request-duplex
      // @ts-expect-error It isn't part of the types, but undici accepts it and it allows to carry over the body to a new request
      duplex: "half"
    }
  });
}
function setOriginPathname(request, pathname) {
  Reflect.set(request, originPathnameSymbol, encodeURIComponent(pathname));
}
function getOriginPathname(request) {
  const origin = Reflect.get(request, originPathnameSymbol);
  if (origin) {
    return decodeURIComponent(origin);
  }
  return new URL(request.url).pathname;
}
function getActionContext(context3) {
  const callerInfo = getCallerInfo(context3);
  const actionResultAlreadySet = Boolean(context3.locals._actionPayload);
  let action = void 0;
  if (callerInfo && context3.request.method === "POST" && !actionResultAlreadySet) {
    action = {
      calledFrom: callerInfo.from,
      name: callerInfo.name,
      handler: /* @__PURE__ */ __name(async () => {
        const pipeline = Reflect.get(context3, apiContextRoutesSymbol);
        const callerInfoName = shouldAppendForwardSlash(
          pipeline.manifest.trailingSlash,
          pipeline.manifest.buildFormat
        ) ? removeTrailingForwardSlash(callerInfo.name) : callerInfo.name;
        const baseAction = await pipeline.getAction(callerInfoName);
        let input;
        try {
          input = await parseRequestBody(context3.request);
        } catch (e) {
          if (e instanceof TypeError) {
            return { data: void 0, error: new ActionError({ code: "UNSUPPORTED_MEDIA_TYPE" }) };
          }
          throw e;
        }
        const omitKeys = ["props", "getActionResult", "callAction", "redirect"];
        const actionAPIContext = Object.create(
          Object.getPrototypeOf(context3),
          Object.fromEntries(
            Object.entries(Object.getOwnPropertyDescriptors(context3)).filter(
              ([key]) => !omitKeys.includes(key)
            )
          )
        );
        Reflect.set(actionAPIContext, ACTION_API_CONTEXT_SYMBOL, true);
        const handler = baseAction.bind(actionAPIContext);
        return handler(input);
      }, "handler")
    };
  }
  function setActionResult(actionName, actionResult) {
    context3.locals._actionPayload = {
      actionResult,
      actionName
    };
  }
  __name(setActionResult, "setActionResult");
  return {
    action,
    setActionResult,
    serializeActionResult,
    deserializeActionResult
  };
}
function getCallerInfo(ctx) {
  if (ctx.routePattern === ACTION_RPC_ROUTE_PATTERN) {
    return { from: "rpc", name: ctx.url.pathname.replace(/^.*\/_actions\//, "") };
  }
  const queryParam = ctx.url.searchParams.get(ACTION_QUERY_PARAMS.actionName);
  if (queryParam) {
    return { from: "form", name: queryParam };
  }
  return void 0;
}
async function parseRequestBody(request) {
  const contentType = request.headers.get("content-type");
  const contentLength = request.headers.get("Content-Length");
  if (!contentType) return void 0;
  if (hasContentType(contentType, formContentTypes)) {
    return await request.clone().formData();
  }
  if (hasContentType(contentType, ["application/json"])) {
    return contentLength === "0" ? void 0 : await request.clone().json();
  }
  throw new TypeError("Unsupported content type");
}
async function callMiddleware(onRequest2, apiContext, responseFunction) {
  let nextCalled = false;
  let responseFunctionPromise = void 0;
  const next = /* @__PURE__ */ __name(async (payload) => {
    nextCalled = true;
    responseFunctionPromise = responseFunction(apiContext, payload);
    return responseFunctionPromise;
  }, "next");
  let middlewarePromise = onRequest2(apiContext, next);
  return await Promise.resolve(middlewarePromise).then(async (value) => {
    if (nextCalled) {
      if (typeof value !== "undefined") {
        if (value instanceof Response === false) {
          throw new AstroError(MiddlewareNotAResponse);
        }
        return value;
      } else {
        if (responseFunctionPromise) {
          return responseFunctionPromise;
        } else {
          throw new AstroError(MiddlewareNotAResponse);
        }
      }
    } else if (typeof value === "undefined") {
      throw new AstroError(MiddlewareNoDataOrNextCalled);
    } else if (value instanceof Response === false) {
      throw new AstroError(MiddlewareNotAResponse);
    } else {
      return value;
    }
  });
}
function validateGetStaticPathsParameter([key, value], route) {
  if (!VALID_PARAM_TYPES.includes(typeof value)) {
    throw new AstroError({
      ...GetStaticPathsInvalidRouteParam,
      message: GetStaticPathsInvalidRouteParam.message(key, value, typeof value),
      location: {
        file: route
      }
    });
  }
}
function validateDynamicRouteModule(mod, {
  ssr: ssr2,
  route
}) {
  if ((!ssr2 || route.prerender) && !mod.getStaticPaths) {
    throw new AstroError({
      ...GetStaticPathsRequired,
      location: { file: route.component }
    });
  }
}
function validateGetStaticPathsResult(result, logger, route) {
  if (!Array.isArray(result)) {
    throw new AstroError({
      ...InvalidGetStaticPathsReturn,
      message: InvalidGetStaticPathsReturn.message(typeof result),
      location: {
        file: route.component
      }
    });
  }
  result.forEach((pathObject) => {
    if (typeof pathObject === "object" && Array.isArray(pathObject) || pathObject === null) {
      throw new AstroError({
        ...InvalidGetStaticPathsEntry,
        message: InvalidGetStaticPathsEntry.message(
          Array.isArray(pathObject) ? "array" : typeof pathObject
        )
      });
    }
    if (pathObject.params === void 0 || pathObject.params === null || pathObject.params && Object.keys(pathObject.params).length === 0) {
      throw new AstroError({
        ...GetStaticPathsExpectedParams,
        location: {
          file: route.component
        }
      });
    }
    for (const [key, val] of Object.entries(pathObject.params)) {
      if (!(typeof val === "undefined" || typeof val === "string" || typeof val === "number")) {
        logger.warn(
          "router",
          `getStaticPaths() returned an invalid path param: "${key}". A string, number or undefined value was expected, but got \`${JSON.stringify(
            val
          )}\`.`
        );
      }
      if (typeof val === "string" && val === "") {
        logger.warn(
          "router",
          `getStaticPaths() returned an invalid path param: "${key}". \`undefined\` expected for an optional param, but got empty string.`
        );
      }
    }
  });
}
function stringifyParams(params, route) {
  const validatedParams = Object.entries(params).reduce((acc, next) => {
    validateGetStaticPathsParameter(next, route.component);
    const [key, value] = next;
    if (value !== void 0) {
      acc[key] = typeof value === "string" ? trimSlashes(value) : value.toString();
    }
    return acc;
  }, {});
  return route.generate(validatedParams);
}
function generatePaginateFunction(routeMatch, base) {
  return /* @__PURE__ */ __name(function paginateUtility(data, args = {}) {
    let { pageSize: _pageSize, params: _params, props: _props } = args;
    const pageSize = _pageSize || 10;
    const paramName = "page";
    const additionalParams = _params || {};
    const additionalProps = _props || {};
    let includesFirstPageNumber;
    if (routeMatch.params.includes(`...${paramName}`)) {
      includesFirstPageNumber = false;
    } else if (routeMatch.params.includes(`${paramName}`)) {
      includesFirstPageNumber = true;
    } else {
      throw new AstroError({
        ...PageNumberParamNotFound,
        message: PageNumberParamNotFound.message(paramName)
      });
    }
    const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
    const result = [...Array(lastPage).keys()].map((num) => {
      const pageNum = num + 1;
      const start = pageSize === Infinity ? 0 : (pageNum - 1) * pageSize;
      const end = Math.min(start + pageSize, data.length);
      const params = {
        ...additionalParams,
        [paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
      };
      const current = addRouteBase(routeMatch.generate({ ...params }), base);
      const next = pageNum === lastPage ? void 0 : addRouteBase(routeMatch.generate({ ...params, page: String(pageNum + 1) }), base);
      const prev = pageNum === 1 ? void 0 : addRouteBase(
        routeMatch.generate({
          ...params,
          page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
        }),
        base
      );
      const first = pageNum === 1 ? void 0 : addRouteBase(
        routeMatch.generate({
          ...params,
          page: includesFirstPageNumber ? "1" : void 0
        }),
        base
      );
      const last = pageNum === lastPage ? void 0 : addRouteBase(routeMatch.generate({ ...params, page: String(lastPage) }), base);
      return {
        params,
        props: {
          ...additionalProps,
          page: {
            data: data.slice(start, end),
            start,
            end: end - 1,
            size: pageSize,
            total: data.length,
            currentPage: pageNum,
            lastPage,
            url: { current, next, prev, first, last }
          }
        }
      };
    });
    return result;
  }, "paginateUtility");
}
function addRouteBase(route, base) {
  let routeWithBase = joinPaths(base, route);
  if (routeWithBase === "") routeWithBase = "/";
  return routeWithBase;
}
async function callGetStaticPaths({
  mod,
  route,
  routeCache,
  logger,
  ssr: ssr2,
  base
}) {
  const cached = routeCache.get(route);
  if (!mod) {
    throw new Error("This is an error caused by Astro and not your code. Please file an issue.");
  }
  if (cached?.staticPaths) {
    return cached.staticPaths;
  }
  validateDynamicRouteModule(mod, { ssr: ssr2, route });
  if (ssr2 && !route.prerender) {
    const entry = Object.assign([], { keyed: /* @__PURE__ */ new Map() });
    routeCache.set(route, { ...cached, staticPaths: entry });
    return entry;
  }
  let staticPaths = [];
  if (!mod.getStaticPaths) {
    throw new Error("Unexpected Error.");
  }
  staticPaths = await mod.getStaticPaths({
    // Q: Why the cast?
    // A: So users downstream can have nicer typings, we have to make some sacrifice in our internal typings, which necessitate a cast here
    paginate: generatePaginateFunction(route, base)
  });
  validateGetStaticPathsResult(staticPaths, logger, route);
  const keyedStaticPaths = staticPaths;
  keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
  for (const sp of keyedStaticPaths) {
    const paramsKey = stringifyParams(sp.params, route);
    keyedStaticPaths.keyed.set(paramsKey, sp);
  }
  routeCache.set(route, { ...cached, staticPaths: keyedStaticPaths });
  return keyedStaticPaths;
}
function findPathItemByKey(staticPaths, params, route, logger) {
  const paramsKey = stringifyParams(params, route);
  const matchedStaticPath = staticPaths.keyed.get(paramsKey);
  if (matchedStaticPath) {
    return matchedStaticPath;
  }
  logger.debug("router", `findPathItemByKey() - Unexpected cache miss looking for ${paramsKey}`);
}
function routeIsRedirect(route) {
  return route?.type === "redirect";
}
function routeIsFallback(route) {
  return route?.type === "fallback";
}
async function getProps(opts) {
  const { logger, mod, routeData: route, routeCache, pathname, serverLike, base } = opts;
  if (!route || route.pathname) {
    return {};
  }
  if (routeIsRedirect(route) || routeIsFallback(route) || route.component === DEFAULT_404_COMPONENT) {
    return {};
  }
  const staticPaths = await callGetStaticPaths({
    mod,
    route,
    routeCache,
    logger,
    ssr: serverLike,
    base
  });
  const params = getParams(route, pathname);
  const matchedStaticPath = findPathItemByKey(staticPaths, params, route, logger);
  if (!matchedStaticPath && (serverLike ? route.prerender : true)) {
    throw new AstroError({
      ...NoMatchingStaticPathFound,
      message: NoMatchingStaticPathFound.message(pathname),
      hint: NoMatchingStaticPathFound.hint([route.component])
    });
  }
  if (mod) {
    validatePrerenderEndpointCollision(route, mod, params);
  }
  const props = matchedStaticPath?.props ? { ...matchedStaticPath.props } : {};
  return props;
}
function getParams(route, pathname) {
  if (!route.params.length) return {};
  const paramsMatch = route.pattern.exec(pathname) || route.fallbackRoutes.map((fallbackRoute) => fallbackRoute.pattern.exec(pathname)).find((x2) => x2);
  if (!paramsMatch) return {};
  const params = {};
  route.params.forEach((key, i2) => {
    if (key.startsWith("...")) {
      params[key.slice(3)] = paramsMatch[i2 + 1] ? paramsMatch[i2 + 1] : void 0;
    } else {
      params[key] = paramsMatch[i2 + 1];
    }
  });
  return params;
}
function validatePrerenderEndpointCollision(route, mod, params) {
  if (route.type === "endpoint" && mod.getStaticPaths) {
    const lastSegment = route.segments[route.segments.length - 1];
    const paramValues = Object.values(params);
    const lastParam = paramValues[paramValues.length - 1];
    if (lastSegment.length === 1 && lastSegment[0].dynamic && lastParam === void 0) {
      throw new AstroError({
        ...PrerenderDynamicEndpointPathCollide,
        message: PrerenderDynamicEndpointPathCollide.message(route.route),
        hint: PrerenderDynamicEndpointPathCollide.hint(route.component),
        location: {
          file: route.component
        }
      });
    }
  }
}
function getFunctionExpression(slot) {
  if (!slot) return;
  const expressions = slot?.expressions?.filter((e) => isRenderInstruction(e) === false);
  if (expressions?.length !== 1) return;
  return expressions[0];
}
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error5) {
    if (options.strict) {
      throw error5;
    }
    return value;
  }
}
function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error5) {
    return Promise.reject(error5);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify$1(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify$1(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c2) => c2.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}
function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}
function defineDriver(factory) {
  return factory;
}
function createStorage(options = {}) {
  const context3 = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = /* @__PURE__ */ __name((key) => {
    for (const base of context3.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context3.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context3.mounts[""]
    };
  }, "getMount");
  const getMounts = /* @__PURE__ */ __name((base, includeParent) => {
    return context3.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context3.mounts[mountpoint]
    }));
  }, "getMounts");
  const onChange = /* @__PURE__ */ __name((event, key) => {
    if (!context3.watching) {
      return;
    }
    key = normalizeKey(key);
    for (const listener of context3.watchListeners) {
      listener(event, key);
    }
  }, "onChange");
  const startWatch = /* @__PURE__ */ __name(async () => {
    if (context3.watching) {
      return;
    }
    context3.watching = true;
    for (const mountpoint in context3.mounts) {
      context3.unwatch[mountpoint] = await watch(
        context3.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  }, "startWatch");
  const stopWatch = /* @__PURE__ */ __name(async () => {
    if (!context3.watching) {
      return;
    }
    for (const mountpoint in context3.unwatch) {
      await context3.unwatch[mountpoint]();
    }
    context3.unwatch = {};
    context3.watching = false;
  }, "stopWatch");
  const runBatch = /* @__PURE__ */ __name((items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = /* @__PURE__ */ __name((mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    }, "getBatch");
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r2) => r2.flat()
    );
  }, "runBatch");
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r2) => r2.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify$1(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify$1(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify$1(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey(key);
          if (!maskedMounts.some((p2) => fullKey.startsWith(p2))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p2) => !p2.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m2) => {
          if (m2.driver.clear) {
            return asyncCall(m2.driver.clear, m2.relativeBase, opts);
          }
          if (m2.driver.removeItem) {
            const keys = await m2.driver.getKeys(m2.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m2.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context3.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context3.watchListeners.push(callback);
      return async () => {
        context3.watchListeners = context3.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context3.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context3.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context3.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context3.mountpoints.push(base);
        context3.mountpoints.sort((a, b) => b.length - a.length);
      }
      context3.mounts[base] = driver;
      if (context3.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context3.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context3.mounts[base]) {
        return;
      }
      if (context3.watching && base in context3.unwatch) {
        context3.unwatch[base]?.();
        delete context3.unwatch[base];
      }
      if (_dispose) {
        await dispose(context3.mounts[base]);
      }
      context3.mountpoints = context3.mountpoints.filter((key) => key !== base);
      delete context3.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey(key) + ":";
      const m2 = getMount(key);
      return {
        driver: m2.driver,
        base: m2.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m2) => ({
        driver: m2.driver,
        base: m2.mountpoint
      }));
    },
    // Aliases
    keys: /* @__PURE__ */ __name((base, opts = {}) => storage.getKeys(base, opts), "keys"),
    get: /* @__PURE__ */ __name((key, opts = {}) => storage.getItem(key, opts), "get"),
    set: /* @__PURE__ */ __name((key, value, opts = {}) => storage.setItem(key, value, opts), "set"),
    has: /* @__PURE__ */ __name((key, opts = {}) => storage.hasItem(key, opts), "has"),
    del: /* @__PURE__ */ __name((key, opts = {}) => storage.removeItem(key, opts), "del"),
    remove: /* @__PURE__ */ __name((key, opts = {}) => storage.removeItem(key, opts), "remove")
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}
async function resolveSessionDriver(driver) {
  if (!driver) {
    return null;
  }
  try {
    if (driver === "fs") {
      return await import.meta.resolve(builtinDrivers.fsLite);
    }
    if (driver in builtinDrivers) {
      return await import.meta.resolve(builtinDrivers[driver]);
    }
  } catch {
    return null;
  }
  return driver;
}
function sequence(...handlers) {
  const filtered = handlers.filter((h2) => !!h2);
  const length = filtered.length;
  if (!length) {
    return defineMiddleware((_context, next) => {
      return next();
    });
  }
  return defineMiddleware((context3, next) => {
    let carriedPayload = void 0;
    return applyHandle(0, context3);
    function applyHandle(i2, handleContext) {
      const handle = filtered[i2];
      const result = handle(handleContext, async (payload) => {
        if (i2 < length - 1) {
          if (payload) {
            let newRequest;
            if (payload instanceof Request) {
              newRequest = payload;
            } else if (payload instanceof URL) {
              newRequest = new Request(payload, handleContext.request);
            } else {
              newRequest = new Request(
                new URL(payload, handleContext.url.origin),
                handleContext.request
              );
            }
            const oldPathname = handleContext.url.pathname;
            const pipeline = Reflect.get(handleContext, apiContextRoutesSymbol);
            const { routeData, pathname } = await pipeline.tryRewrite(
              payload,
              handleContext.request
            );
            if (pipeline.serverLike === true && handleContext.isPrerendered === false && routeData.prerender === true) {
              throw new AstroError({
                ...ForbiddenRewrite,
                message: ForbiddenRewrite.message(
                  handleContext.url.pathname,
                  pathname,
                  routeData.component
                ),
                hint: ForbiddenRewrite.hint(routeData.component)
              });
            }
            carriedPayload = payload;
            handleContext.request = newRequest;
            handleContext.url = new URL(newRequest.url);
            handleContext.cookies = new AstroCookies(newRequest);
            handleContext.params = getParams(routeData, pathname);
            setOriginPathname(handleContext.request, oldPathname);
          }
          return applyHandle(i2 + 1, handleContext);
        } else {
          return next(payload ?? carriedPayload);
        }
      });
      return result;
    }
    __name(applyHandle, "applyHandle");
  });
}
function defineMiddleware(fn) {
  return fn;
}
var ACTION_API_CONTEXT_SYMBOL, formContentTypes, SERVER_ISLAND_ROUTE, SERVER_ISLAND_COMPONENT, SERVER_ISLAND_BASE_PREFIX, ROUTE404_RE, ROUTE500_RE, DELETED_EXPIRATION, DELETED_VALUE, responseSentSymbol2, identity, AstroCookie, AstroCookies, astroCookiesSymbol, VALID_PARAM_TYPES, RouteCache, Slots, suspectProtoRx, suspectConstructorRx, JsonSigRx, BASE64_PREFIX, DRIVER_NAME, memory, builtinDrivers, PERSIST_SYMBOL, DEFAULT_COOKIE_NAME, VALID_COOKIE_REGEX, unflatten2, stringify2, AstroSession, apiContextRoutesSymbol, RenderContext;
var init_index_DfvzXTkm = __esm({
  ".wrangler/tmp/pages-aJ3rp1/chunks/index_DfvzXTkm.mjs"() {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_astro_designed_error_pages_Bb_tmHv();
    init_server_jD9syGVz();
    init_internal_CwtpzG_q();
    init_parse_EttCPxrw();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    ACTION_API_CONTEXT_SYMBOL = Symbol.for("astro.actionAPIContext");
    formContentTypes = ["application/x-www-form-urlencoded", "multipart/form-data"];
    __name(hasContentType, "hasContentType");
    __name(hasActionPayload, "hasActionPayload");
    __name(createGetActionResult, "createGetActionResult");
    __name(createCallAction, "createCallAction");
    __name(shouldAppendForwardSlash, "shouldAppendForwardSlash");
    __name(redirectIsExternal, "redirectIsExternal");
    __name(renderRedirect, "renderRedirect");
    __name(redirectRouteGenerate, "redirectRouteGenerate");
    SERVER_ISLAND_ROUTE = "/_server-islands/[name]";
    SERVER_ISLAND_COMPONENT = "_server-islands.astro";
    SERVER_ISLAND_BASE_PREFIX = "_server-islands";
    __name(badRequest, "badRequest");
    __name(getRequestData, "getRequestData");
    __name(createEndpoint, "createEndpoint");
    __name(matchRoute, "matchRoute");
    ROUTE404_RE = /^\/404\/?$/;
    ROUTE500_RE = /^\/500\/?$/;
    __name(isRoute404, "isRoute404");
    __name(isRoute500, "isRoute500");
    __name(isRoute404or500, "isRoute404or500");
    __name(isRouteServerIsland, "isRouteServerIsland");
    __name(isRequestServerIsland, "isRequestServerIsland");
    __name(requestIs404Or500, "requestIs404Or500");
    __name(isRouteExternalRedirect, "isRouteExternalRedirect");
    __name(requestHasLocale, "requestHasLocale");
    __name(pathHasLocale, "pathHasLocale");
    __name(getPathByLocale, "getPathByLocale");
    __name(normalizeTheLocale, "normalizeTheLocale");
    __name(getAllCodes, "getAllCodes");
    __name(redirectToDefaultLocale, "redirectToDefaultLocale");
    __name(notFound, "notFound");
    __name(redirectToFallback, "redirectToFallback");
    __name(parseLocale, "parseLocale");
    __name(sortAndFilterLocales, "sortAndFilterLocales");
    __name(computePreferredLocale, "computePreferredLocale");
    __name(computePreferredLocaleList, "computePreferredLocaleList");
    __name(computeCurrentLocale, "computeCurrentLocale");
    DELETED_EXPIRATION = /* @__PURE__ */ new Date(0);
    DELETED_VALUE = "deleted";
    responseSentSymbol2 = Symbol.for("astro.responseSent");
    identity = /* @__PURE__ */ __name((value) => value, "identity");
    AstroCookie = class {
      static {
        __name(this, "AstroCookie");
      }
      constructor(value) {
        this.value = value;
      }
      json() {
        if (this.value === void 0) {
          throw new Error(`Cannot convert undefined to an object.`);
        }
        return JSON.parse(this.value);
      }
      number() {
        return Number(this.value);
      }
      boolean() {
        if (this.value === "false") return false;
        if (this.value === "0") return false;
        return Boolean(this.value);
      }
    };
    AstroCookies = class {
      static {
        __name(this, "AstroCookies");
      }
      #request;
      #requestValues;
      #outgoing;
      #consumed;
      constructor(request) {
        this.#request = request;
        this.#requestValues = null;
        this.#outgoing = null;
        this.#consumed = false;
      }
      /**
       * Astro.cookies.delete(key) is used to delete a cookie. Using this method will result
       * in a Set-Cookie header added to the response.
       * @param key The cookie to delete
       * @param options Options related to this deletion, such as the path of the cookie.
       */
      delete(key, options) {
        const {
          // @ts-expect-error
          maxAge: _ignoredMaxAge,
          // @ts-expect-error
          expires: _ignoredExpires,
          ...sanitizedOptions
        } = options || {};
        const serializeOptions = {
          expires: DELETED_EXPIRATION,
          ...sanitizedOptions
        };
        this.#ensureOutgoingMap().set(key, [
          DELETED_VALUE,
          distExports.serialize(key, DELETED_VALUE, serializeOptions),
          false
        ]);
      }
      /**
       * Astro.cookies.get(key) is used to get a cookie value. The cookie value is read from the
       * request. If you have set a cookie via Astro.cookies.set(key, value), the value will be taken
       * from that set call, overriding any values already part of the request.
       * @param key The cookie to get.
       * @returns An object containing the cookie value as well as convenience methods for converting its value.
       */
      get(key, options = void 0) {
        if (this.#outgoing?.has(key)) {
          let [serializedValue, , isSetValue] = this.#outgoing.get(key);
          if (isSetValue) {
            return new AstroCookie(serializedValue);
          } else {
            return void 0;
          }
        }
        const decode = options?.decode ?? decodeURIComponent;
        const values = this.#ensureParsed();
        if (key in values) {
          const value = values[key];
          if (value) {
            return new AstroCookie(decode(value));
          }
        }
      }
      /**
       * Astro.cookies.has(key) returns a boolean indicating whether this cookie is either
       * part of the initial request or set via Astro.cookies.set(key)
       * @param key The cookie to check for.
       * @param _options This parameter is no longer used.
       * @returns
       */
      has(key, _options) {
        if (this.#outgoing?.has(key)) {
          let [, , isSetValue] = this.#outgoing.get(key);
          return isSetValue;
        }
        const values = this.#ensureParsed();
        return values[key] !== void 0;
      }
      /**
       * Astro.cookies.set(key, value) is used to set a cookie's value. If provided
       * an object it will be stringified via JSON.stringify(value). Additionally you
       * can provide options customizing how this cookie will be set, such as setting httpOnly
       * in order to prevent the cookie from being read in client-side JavaScript.
       * @param key The name of the cookie to set.
       * @param value A value, either a string or other primitive or an object.
       * @param options Options for the cookie, such as the path and security settings.
       */
      set(key, value, options) {
        if (this.#consumed) {
          const warning = new Error(
            "Astro.cookies.set() was called after the cookies had already been sent to the browser.\nThis may have happened if this method was called in an imported component.\nPlease make sure that Astro.cookies.set() is only called in the frontmatter of the main page."
          );
          warning.name = "Warning";
          console.warn(warning);
        }
        let serializedValue;
        if (typeof value === "string") {
          serializedValue = value;
        } else {
          let toStringValue = value.toString();
          if (toStringValue === Object.prototype.toString.call(value)) {
            serializedValue = JSON.stringify(value);
          } else {
            serializedValue = toStringValue;
          }
        }
        const serializeOptions = {};
        if (options) {
          Object.assign(serializeOptions, options);
        }
        this.#ensureOutgoingMap().set(key, [
          serializedValue,
          distExports.serialize(key, serializedValue, serializeOptions),
          true
        ]);
        if (this.#request[responseSentSymbol2]) {
          throw new AstroError({
            ...ResponseSentError
          });
        }
      }
      /**
       * Merges a new AstroCookies instance into the current instance. Any new cookies
       * will be added to the current instance, overwriting any existing cookies with the same name.
       */
      merge(cookies) {
        const outgoing = cookies.#outgoing;
        if (outgoing) {
          for (const [key, value] of outgoing) {
            this.#ensureOutgoingMap().set(key, value);
          }
        }
      }
      /**
       * Astro.cookies.header() returns an iterator for the cookies that have previously
       * been set by either Astro.cookies.set() or Astro.cookies.delete().
       * This method is primarily used by adapters to set the header on outgoing responses.
       * @returns
       */
      *headers() {
        if (this.#outgoing == null) return;
        for (const [, value] of this.#outgoing) {
          yield value[1];
        }
      }
      /**
       * Behaves the same as AstroCookies.prototype.headers(),
       * but allows a warning when cookies are set after the instance is consumed.
       */
      static consume(cookies) {
        cookies.#consumed = true;
        return cookies.headers();
      }
      #ensureParsed() {
        if (!this.#requestValues) {
          this.#parse();
        }
        if (!this.#requestValues) {
          this.#requestValues = {};
        }
        return this.#requestValues;
      }
      #ensureOutgoingMap() {
        if (!this.#outgoing) {
          this.#outgoing = /* @__PURE__ */ new Map();
        }
        return this.#outgoing;
      }
      #parse() {
        const raw = this.#request.headers.get("cookie");
        if (!raw) {
          return;
        }
        this.#requestValues = distExports.parse(raw, { decode: identity });
      }
    };
    astroCookiesSymbol = Symbol.for("astro.cookies");
    __name(attachCookiesToResponse, "attachCookiesToResponse");
    __name(getCookiesFromResponse, "getCookiesFromResponse");
    __name(getSetCookiesFromResponse, "getSetCookiesFromResponse");
    __name(createRequest, "createRequest");
    __name(findRouteToRewrite, "findRouteToRewrite");
    __name(copyRequest, "copyRequest");
    __name(setOriginPathname, "setOriginPathname");
    __name(getOriginPathname, "getOriginPathname");
    __name(getActionContext, "getActionContext");
    __name(getCallerInfo, "getCallerInfo");
    __name(parseRequestBody, "parseRequestBody");
    __name(callMiddleware, "callMiddleware");
    VALID_PARAM_TYPES = ["string", "number", "undefined"];
    __name(validateGetStaticPathsParameter, "validateGetStaticPathsParameter");
    __name(validateDynamicRouteModule, "validateDynamicRouteModule");
    __name(validateGetStaticPathsResult, "validateGetStaticPathsResult");
    __name(stringifyParams, "stringifyParams");
    __name(generatePaginateFunction, "generatePaginateFunction");
    __name(addRouteBase, "addRouteBase");
    __name(callGetStaticPaths, "callGetStaticPaths");
    RouteCache = class {
      static {
        __name(this, "RouteCache");
      }
      logger;
      cache = {};
      runtimeMode;
      constructor(logger, runtimeMode = "production") {
        this.logger = logger;
        this.runtimeMode = runtimeMode;
      }
      /** Clear the cache. */
      clearAll() {
        this.cache = {};
      }
      set(route, entry) {
        const key = this.key(route);
        if (this.runtimeMode === "production" && this.cache[key]?.staticPaths) {
          this.logger.warn(null, `Internal Warning: route cache overwritten. (${key})`);
        }
        this.cache[key] = entry;
      }
      get(route) {
        return this.cache[this.key(route)];
      }
      key(route) {
        return `${route.route}_${route.component}`;
      }
    };
    __name(findPathItemByKey, "findPathItemByKey");
    __name(routeIsRedirect, "routeIsRedirect");
    __name(routeIsFallback, "routeIsFallback");
    __name(getProps, "getProps");
    __name(getParams, "getParams");
    __name(validatePrerenderEndpointCollision, "validatePrerenderEndpointCollision");
    __name(getFunctionExpression, "getFunctionExpression");
    Slots = class {
      static {
        __name(this, "Slots");
      }
      #result;
      #slots;
      #logger;
      constructor(result, slots, logger) {
        this.#result = result;
        this.#slots = slots;
        this.#logger = logger;
        if (slots) {
          for (const key of Object.keys(slots)) {
            if (this[key] !== void 0) {
              throw new AstroError({
                ...ReservedSlotName,
                message: ReservedSlotName.message(key)
              });
            }
            Object.defineProperty(this, key, {
              get() {
                return true;
              },
              enumerable: true
            });
          }
        }
      }
      has(name) {
        if (!this.#slots) return false;
        return Boolean(this.#slots[name]);
      }
      async render(name, args = []) {
        if (!this.#slots || !this.has(name)) return;
        const result = this.#result;
        if (!Array.isArray(args)) {
          this.#logger.warn(
            null,
            `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`
          );
        } else if (args.length > 0) {
          const slotValue = this.#slots[name];
          const component = typeof slotValue === "function" ? await slotValue(result) : await slotValue;
          const expression = getFunctionExpression(component);
          if (expression) {
            const slot = /* @__PURE__ */ __name(async () => typeof expression === "function" ? expression(...args) : expression, "slot");
            return await renderSlotToString(result, slot).then((res) => {
              return res;
            });
          }
          if (typeof component === "function") {
            return await renderJSX(result, component(...args)).then(
              (res) => res != null ? String(res) : res
            );
          }
        }
        const content = await renderSlotToString(result, this.#slots[name]);
        const outHTML = chunkToString(result, content);
        return outHTML;
      }
    };
    suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    __name(jsonParseTransform, "jsonParseTransform");
    __name(warnKeyDropped, "warnKeyDropped");
    __name(destr, "destr");
    __name(wrapToPromise, "wrapToPromise");
    __name(asyncCall, "asyncCall");
    __name(isPrimitive, "isPrimitive");
    __name(isPureObject, "isPureObject");
    __name(stringify$1, "stringify$1");
    BASE64_PREFIX = "base64:";
    __name(serializeRaw, "serializeRaw");
    __name(deserializeRaw, "deserializeRaw");
    __name(base64Decode, "base64Decode");
    __name(base64Encode, "base64Encode");
    __name(normalizeKey, "normalizeKey");
    __name(joinKeys, "joinKeys");
    __name(normalizeBaseKey, "normalizeBaseKey");
    __name(filterKeyByDepth, "filterKeyByDepth");
    __name(filterKeyByBase, "filterKeyByBase");
    __name(defineDriver, "defineDriver");
    DRIVER_NAME = "memory";
    memory = defineDriver(() => {
      const data = /* @__PURE__ */ new Map();
      return {
        name: DRIVER_NAME,
        getInstance: /* @__PURE__ */ __name(() => data, "getInstance"),
        hasItem(key) {
          return data.has(key);
        },
        getItem(key) {
          return data.get(key) ?? null;
        },
        getItemRaw(key) {
          return data.get(key) ?? null;
        },
        setItem(key, value) {
          data.set(key, value);
        },
        setItemRaw(key, value) {
          data.set(key, value);
        },
        removeItem(key) {
          data.delete(key);
        },
        getKeys() {
          return [...data.keys()];
        },
        clear() {
          data.clear();
        },
        dispose() {
          data.clear();
        }
      };
    });
    __name(createStorage, "createStorage");
    __name(watch, "watch");
    __name(dispose, "dispose");
    builtinDrivers = {
      "azure-app-configuration": "unstorage/drivers/azure-app-configuration",
      "azureAppConfiguration": "unstorage/drivers/azure-app-configuration",
      "azure-cosmos": "unstorage/drivers/azure-cosmos",
      "azureCosmos": "unstorage/drivers/azure-cosmos",
      "azure-key-vault": "unstorage/drivers/azure-key-vault",
      "azureKeyVault": "unstorage/drivers/azure-key-vault",
      "azure-storage-blob": "unstorage/drivers/azure-storage-blob",
      "azureStorageBlob": "unstorage/drivers/azure-storage-blob",
      "azure-storage-table": "unstorage/drivers/azure-storage-table",
      "azureStorageTable": "unstorage/drivers/azure-storage-table",
      "capacitor-preferences": "unstorage/drivers/capacitor-preferences",
      "capacitorPreferences": "unstorage/drivers/capacitor-preferences",
      "cloudflare-kv-binding": "unstorage/drivers/cloudflare-kv-binding",
      "cloudflareKVBinding": "unstorage/drivers/cloudflare-kv-binding",
      "cloudflare-kv-http": "unstorage/drivers/cloudflare-kv-http",
      "cloudflareKVHttp": "unstorage/drivers/cloudflare-kv-http",
      "cloudflare-r2-binding": "unstorage/drivers/cloudflare-r2-binding",
      "cloudflareR2Binding": "unstorage/drivers/cloudflare-r2-binding",
      "db0": "unstorage/drivers/db0",
      "deno-kv-node": "unstorage/drivers/deno-kv-node",
      "denoKVNode": "unstorage/drivers/deno-kv-node",
      "deno-kv": "unstorage/drivers/deno-kv",
      "denoKV": "unstorage/drivers/deno-kv",
      "fs-lite": "unstorage/drivers/fs-lite",
      "fsLite": "unstorage/drivers/fs-lite",
      "fs": "unstorage/drivers/fs",
      "github": "unstorage/drivers/github",
      "http": "unstorage/drivers/http",
      "indexedb": "unstorage/drivers/indexedb",
      "localstorage": "unstorage/drivers/localstorage",
      "lru-cache": "unstorage/drivers/lru-cache",
      "lruCache": "unstorage/drivers/lru-cache",
      "memory": "unstorage/drivers/memory",
      "mongodb": "unstorage/drivers/mongodb",
      "netlify-blobs": "unstorage/drivers/netlify-blobs",
      "netlifyBlobs": "unstorage/drivers/netlify-blobs",
      "null": "unstorage/drivers/null",
      "overlay": "unstorage/drivers/overlay",
      "planetscale": "unstorage/drivers/planetscale",
      "redis": "unstorage/drivers/redis",
      "s3": "unstorage/drivers/s3",
      "session-storage": "unstorage/drivers/session-storage",
      "sessionStorage": "unstorage/drivers/session-storage",
      "uploadthing": "unstorage/drivers/uploadthing",
      "upstash": "unstorage/drivers/upstash",
      "vercel-blob": "unstorage/drivers/vercel-blob",
      "vercelBlob": "unstorage/drivers/vercel-blob",
      "vercel-kv": "unstorage/drivers/vercel-kv",
      "vercelKV": "unstorage/drivers/vercel-kv"
    };
    PERSIST_SYMBOL = Symbol();
    DEFAULT_COOKIE_NAME = "astro-session";
    VALID_COOKIE_REGEX = /^[\w-]+$/;
    unflatten2 = /* @__PURE__ */ __name((parsed, _2) => {
      return unflatten(parsed, {
        URL: /* @__PURE__ */ __name((href) => new URL(href), "URL")
      });
    }, "unflatten");
    stringify2 = /* @__PURE__ */ __name((data, _2) => {
      return stringify(data, {
        // Support URL objects
        URL: /* @__PURE__ */ __name((val) => val instanceof URL && val.href, "URL")
      });
    }, "stringify");
    AstroSession = class _AstroSession {
      static {
        __name(this, "AstroSession");
      }
      // The cookies object.
      #cookies;
      // The session configuration.
      #config;
      // The cookie config
      #cookieConfig;
      // The cookie name
      #cookieName;
      // The unstorage object for the session driver.
      #storage;
      #data;
      // The session ID. A v4 UUID.
      #sessionID;
      // Sessions to destroy. Needed because we won't have the old session ID after it's destroyed locally.
      #toDestroy = /* @__PURE__ */ new Set();
      // Session keys to delete. Used for partial data sets to avoid overwriting the deleted value.
      #toDelete = /* @__PURE__ */ new Set();
      // Whether the session is dirty and needs to be saved.
      #dirty = false;
      // Whether the session cookie has been set.
      #cookieSet = false;
      // The local data is "partial" if it has not been loaded from storage yet and only
      // contains values that have been set or deleted in-memory locally.
      // We do this to avoid the need to block on loading data when it is only being set.
      // When we load the data from storage, we need to merge it with the local partial data,
      // preserving in-memory changes and deletions.
      #partial = true;
      static #sharedStorage = /* @__PURE__ */ new Map();
      constructor(cookies, {
        cookie: cookieConfig = DEFAULT_COOKIE_NAME,
        ...config3
      }, runtimeMode) {
        this.#cookies = cookies;
        let cookieConfigObject;
        if (typeof cookieConfig === "object") {
          const { name = DEFAULT_COOKIE_NAME, ...rest } = cookieConfig;
          this.#cookieName = name;
          cookieConfigObject = rest;
        } else {
          this.#cookieName = cookieConfig || DEFAULT_COOKIE_NAME;
        }
        this.#cookieConfig = {
          sameSite: "lax",
          secure: runtimeMode === "production",
          path: "/",
          ...cookieConfigObject,
          httpOnly: true
        };
        this.#config = config3;
      }
      /**
       * Gets a session value. Returns `undefined` if the session or value does not exist.
       */
      async get(key) {
        return (await this.#ensureData()).get(key)?.data;
      }
      /**
       * Checks if a session value exists.
       */
      async has(key) {
        return (await this.#ensureData()).has(key);
      }
      /**
       * Gets all session values.
       */
      async keys() {
        return (await this.#ensureData()).keys();
      }
      /**
       * Gets all session values.
       */
      async values() {
        return [...(await this.#ensureData()).values()].map((entry) => entry.data);
      }
      /**
       * Gets all session entries.
       */
      async entries() {
        return [...(await this.#ensureData()).entries()].map(([key, entry]) => [key, entry.data]);
      }
      /**
       * Deletes a session value.
       */
      delete(key) {
        this.#data?.delete(key);
        if (this.#partial) {
          this.#toDelete.add(key);
        }
        this.#dirty = true;
      }
      /**
       * Sets a session value. The session is created if it does not exist.
       */
      set(key, value, { ttl } = {}) {
        if (!key) {
          throw new AstroError({
            ...SessionStorageSaveError,
            message: "The session key was not provided."
          });
        }
        let cloned;
        try {
          cloned = unflatten2(JSON.parse(stringify2(value)));
        } catch (err) {
          throw new AstroError(
            {
              ...SessionStorageSaveError,
              message: `The session data for ${key} could not be serialized.`,
              hint: "See the devalue library for all supported types: https://github.com/rich-harris/devalue"
            },
            { cause: err }
          );
        }
        if (!this.#cookieSet) {
          this.#setCookie();
          this.#cookieSet = true;
        }
        this.#data ??= /* @__PURE__ */ new Map();
        const lifetime = ttl ?? this.#config.ttl;
        const expires = typeof lifetime === "number" ? Date.now() + lifetime * 1e3 : lifetime;
        this.#data.set(key, {
          data: cloned,
          expires
        });
        this.#dirty = true;
      }
      /**
       * Destroys the session, clearing the cookie and storage if it exists.
       */
      destroy() {
        this.#destroySafe();
      }
      /**
       * Regenerates the session, creating a new session ID. The existing session data is preserved.
       */
      async regenerate() {
        let data = /* @__PURE__ */ new Map();
        try {
          data = await this.#ensureData();
        } catch (err) {
          console.error("Failed to load session data during regeneration:", err);
        }
        const oldSessionId = this.#sessionID;
        this.#sessionID = crypto.randomUUID();
        this.#data = data;
        await this.#setCookie();
        if (oldSessionId && this.#storage) {
          this.#storage.removeItem(oldSessionId).catch((err) => {
            console.error("Failed to remove old session data:", err);
          });
        }
      }
      // Persists the session data to storage.
      // This is called automatically at the end of the request.
      // Uses a symbol to prevent users from calling it directly.
      async [PERSIST_SYMBOL]() {
        if (!this.#dirty && !this.#toDestroy.size) {
          return;
        }
        const storage = await this.#ensureStorage();
        if (this.#dirty && this.#data) {
          const data = await this.#ensureData();
          this.#toDelete.forEach((key2) => data.delete(key2));
          const key = this.#ensureSessionID();
          let serialized;
          try {
            serialized = stringify2(data);
          } catch (err) {
            throw new AstroError(
              {
                ...SessionStorageSaveError,
                message: SessionStorageSaveError.message(
                  "The session data could not be serialized.",
                  this.#config.driver
                )
              },
              { cause: err }
            );
          }
          await storage.setItem(key, serialized);
          this.#dirty = false;
        }
        if (this.#toDestroy.size > 0) {
          const cleanupPromises = [...this.#toDestroy].map(
            (sessionId) => storage.removeItem(sessionId).catch((err) => {
              console.error(`Failed to clean up session ${sessionId}:`, err);
            })
          );
          await Promise.all(cleanupPromises);
          this.#toDestroy.clear();
        }
      }
      get sessionID() {
        return this.#sessionID;
      }
      /**
       * Loads a session from storage with the given ID, and replaces the current session.
       * Any changes made to the current session will be lost.
       * This is not normally needed, as the session is automatically loaded using the cookie.
       * However it can be used to restore a session where the ID has been recorded somewhere
       * else (e.g. in a database).
       */
      async load(sessionID) {
        this.#sessionID = sessionID;
        this.#data = void 0;
        await this.#setCookie();
        await this.#ensureData();
      }
      /**
       * Sets the session cookie.
       */
      async #setCookie() {
        if (!VALID_COOKIE_REGEX.test(this.#cookieName)) {
          throw new AstroError({
            ...SessionStorageSaveError,
            message: "Invalid cookie name. Cookie names can only contain letters, numbers, and dashes."
          });
        }
        const value = this.#ensureSessionID();
        this.#cookies.set(this.#cookieName, value, this.#cookieConfig);
      }
      /**
       * Attempts to load the session data from storage, or creates a new data object if none exists.
       * If there is existing partial data, it will be merged into the new data object.
       */
      async #ensureData() {
        const storage = await this.#ensureStorage();
        if (this.#data && !this.#partial) {
          return this.#data;
        }
        this.#data ??= /* @__PURE__ */ new Map();
        const raw = await storage.get(this.#ensureSessionID());
        if (!raw) {
          return this.#data;
        }
        try {
          const storedMap = unflatten2(raw);
          if (!(storedMap instanceof Map)) {
            await this.#destroySafe();
            throw new AstroError({
              ...SessionStorageInitError,
              message: SessionStorageInitError.message(
                "The session data was an invalid type.",
                this.#config.driver
              )
            });
          }
          const now = Date.now();
          for (const [key, value] of storedMap) {
            const expired = typeof value.expires === "number" && value.expires < now;
            if (!this.#data.has(key) && !this.#toDelete.has(key) && !expired) {
              this.#data.set(key, value);
            }
          }
          this.#partial = false;
          return this.#data;
        } catch (err) {
          await this.#destroySafe();
          if (err instanceof AstroError) {
            throw err;
          }
          throw new AstroError(
            {
              ...SessionStorageInitError,
              message: SessionStorageInitError.message(
                "The session data could not be parsed.",
                this.#config.driver
              )
            },
            { cause: err }
          );
        }
      }
      /**
       * Safely destroys the session, clearing the cookie and storage if it exists.
       */
      #destroySafe() {
        if (this.#sessionID) {
          this.#toDestroy.add(this.#sessionID);
        }
        if (this.#cookieName) {
          this.#cookies.delete(this.#cookieName, this.#cookieConfig);
        }
        this.#sessionID = void 0;
        this.#data = void 0;
        this.#dirty = true;
      }
      /**
       * Returns the session ID, generating a new one if it does not exist.
       */
      #ensureSessionID() {
        this.#sessionID ??= this.#cookies.get(this.#cookieName)?.value ?? crypto.randomUUID();
        return this.#sessionID;
      }
      /**
       * Ensures the storage is initialized.
       * This is called automatically when a storage operation is needed.
       */
      async #ensureStorage() {
        if (this.#storage) {
          return this.#storage;
        }
        if (_AstroSession.#sharedStorage.has(this.#config.driver)) {
          this.#storage = _AstroSession.#sharedStorage.get(this.#config.driver);
          return this.#storage;
        }
        if (this.#config.driver === "test") {
          this.#storage = this.#config.options.mockStorage;
          return this.#storage;
        }
        if (this.#config.driver === "fs" || this.#config.driver === "fsLite" || this.#config.driver === "fs-lite") {
          this.#config.options ??= {};
          this.#config.driver = "fs-lite";
          this.#config.options.base ??= ".astro/session";
        }
        if (!this.#config?.driver) {
          throw new AstroError({
            ...SessionStorageInitError,
            message: SessionStorageInitError.message(
              "No driver was defined in the session configuration and the adapter did not provide a default driver."
            )
          });
        }
        let driver = null;
        const driverPackage = await resolveSessionDriver(this.#config.driver);
        try {
          if (this.#config.driverModule) {
            driver = (await this.#config.driverModule()).default;
          } else if (driverPackage) {
            driver = (await import(driverPackage)).default;
          }
        } catch (err) {
          if (err.code === "ERR_MODULE_NOT_FOUND") {
            throw new AstroError(
              {
                ...SessionStorageInitError,
                message: SessionStorageInitError.message(
                  err.message.includes(`Cannot find package '${driverPackage}'`) ? "The driver module could not be found." : err.message,
                  this.#config.driver
                )
              },
              { cause: err }
            );
          }
          throw err;
        }
        if (!driver) {
          throw new AstroError({
            ...SessionStorageInitError,
            message: SessionStorageInitError.message(
              "The module did not export a driver.",
              this.#config.driver
            )
          });
        }
        try {
          this.#storage = createStorage({
            driver: driver(this.#config.options)
          });
          _AstroSession.#sharedStorage.set(this.#config.driver, this.#storage);
          return this.#storage;
        } catch (err) {
          throw new AstroError(
            {
              ...SessionStorageInitError,
              message: SessionStorageInitError.message("Unknown error", this.#config.driver)
            },
            { cause: err }
          );
        }
      }
    };
    __name(resolveSessionDriver, "resolveSessionDriver");
    apiContextRoutesSymbol = Symbol.for("context.routes");
    RenderContext = class _RenderContext {
      static {
        __name(this, "RenderContext");
      }
      constructor(pipeline, locals, middleware, actions, pathname, request, routeData, status, clientAddress, cookies = new AstroCookies(request), params = getParams(routeData, pathname), url = new URL(request.url), props = {}, partial = void 0, session = pipeline.manifest.sessionConfig ? new AstroSession(cookies, pipeline.manifest.sessionConfig, pipeline.runtimeMode) : void 0) {
        this.pipeline = pipeline;
        this.locals = locals;
        this.middleware = middleware;
        this.actions = actions;
        this.pathname = pathname;
        this.request = request;
        this.routeData = routeData;
        this.status = status;
        this.clientAddress = clientAddress;
        this.cookies = cookies;
        this.params = params;
        this.url = url;
        this.props = props;
        this.partial = partial;
        this.session = session;
      }
      /**
       * A flag that tells the render content if the rewriting was triggered
       */
      isRewriting = false;
      /**
       * A safety net in case of loops
       */
      counter = 0;
      static async create({
        locals = {},
        middleware,
        pathname,
        pipeline,
        request,
        routeData,
        clientAddress,
        status = 200,
        props,
        partial = void 0,
        actions
      }) {
        const pipelineMiddleware = await pipeline.getMiddleware();
        const pipelineActions = actions ?? await pipeline.getActions();
        setOriginPathname(request, pathname);
        return new _RenderContext(
          pipeline,
          locals,
          sequence(...pipeline.internalMiddleware, middleware ?? pipelineMiddleware),
          pipelineActions,
          pathname,
          request,
          routeData,
          status,
          clientAddress,
          void 0,
          void 0,
          void 0,
          props,
          partial
        );
      }
      /**
       * The main function of the RenderContext.
       *
       * Use this function to render any route known to Astro.
       * It attempts to render a route. A route can be a:
       *
       * - page
       * - redirect
       * - endpoint
       * - fallback
       */
      async render(componentInstance, slots = {}) {
        const { cookies, middleware, pipeline } = this;
        const { logger, serverLike, streaming, manifest: manifest2 } = pipeline;
        const props = Object.keys(this.props).length > 0 ? this.props : await getProps({
          mod: componentInstance,
          routeData: this.routeData,
          routeCache: this.pipeline.routeCache,
          pathname: this.pathname,
          logger,
          serverLike,
          base: manifest2.base
        });
        const actionApiContext = this.createActionAPIContext();
        const apiContext = this.createAPIContext(props, actionApiContext);
        this.counter++;
        if (this.counter === 4) {
          return new Response("Loop Detected", {
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508
            status: 508,
            statusText: "Astro detected a loop where you tried to call the rewriting logic more than four times."
          });
        }
        const lastNext = /* @__PURE__ */ __name(async (ctx, payload) => {
          if (payload) {
            const oldPathname = this.pathname;
            pipeline.logger.debug("router", "Called rewriting to:", payload);
            const {
              routeData,
              componentInstance: newComponent,
              pathname,
              newUrl
            } = await pipeline.tryRewrite(payload, this.request);
            if (this.pipeline.serverLike === true && this.routeData.prerender === false && routeData.prerender === true) {
              throw new AstroError({
                ...ForbiddenRewrite,
                message: ForbiddenRewrite.message(this.pathname, pathname, routeData.component),
                hint: ForbiddenRewrite.hint(routeData.component)
              });
            }
            this.routeData = routeData;
            componentInstance = newComponent;
            if (payload instanceof Request) {
              this.request = payload;
            } else {
              this.request = copyRequest(
                newUrl,
                this.request,
                // need to send the flag of the previous routeData
                routeData.prerender,
                this.pipeline.logger,
                this.routeData.route
              );
            }
            this.isRewriting = true;
            this.url = new URL(this.request.url);
            this.cookies = new AstroCookies(this.request);
            this.params = getParams(routeData, pathname);
            this.pathname = pathname;
            this.status = 200;
            setOriginPathname(this.request, oldPathname);
          }
          let response2;
          if (!ctx.isPrerendered) {
            const { action, setActionResult, serializeActionResult: serializeActionResult2 } = getActionContext(ctx);
            if (action?.calledFrom === "form") {
              const actionResult = await action.handler();
              setActionResult(action.name, serializeActionResult2(actionResult));
            }
          }
          switch (this.routeData.type) {
            case "endpoint": {
              response2 = await renderEndpoint(
                componentInstance,
                ctx,
                this.routeData.prerender,
                logger
              );
              break;
            }
            case "redirect":
              return renderRedirect(this);
            case "page": {
              const result = await this.createResult(componentInstance, actionApiContext);
              try {
                response2 = await renderPage(
                  result,
                  componentInstance?.default,
                  props,
                  slots,
                  streaming,
                  this.routeData
                );
              } catch (e) {
                result.cancelled = true;
                throw e;
              }
              response2.headers.set(ROUTE_TYPE_HEADER, "page");
              if (this.routeData.route === "/404" || this.routeData.route === "/500") {
                response2.headers.set(REROUTE_DIRECTIVE_HEADER, "no");
              }
              if (this.isRewriting) {
                response2.headers.set(REWRITE_DIRECTIVE_HEADER_KEY, REWRITE_DIRECTIVE_HEADER_VALUE);
              }
              break;
            }
            case "fallback": {
              return new Response(null, { status: 500, headers: { [ROUTE_TYPE_HEADER]: "fallback" } });
            }
          }
          const responseCookies = getCookiesFromResponse(response2);
          if (responseCookies) {
            cookies.merge(responseCookies);
          }
          return response2;
        }, "lastNext");
        if (isRouteExternalRedirect(this.routeData)) {
          return renderRedirect(this);
        }
        const response = await callMiddleware(middleware, apiContext, lastNext);
        if (response.headers.get(ROUTE_TYPE_HEADER)) {
          response.headers.delete(ROUTE_TYPE_HEADER);
        }
        attachCookiesToResponse(response, cookies);
        return response;
      }
      createAPIContext(props, context3) {
        const redirect = /* @__PURE__ */ __name((path, status = 302) => new Response(null, { status, headers: { Location: path } }), "redirect");
        Reflect.set(context3, apiContextRoutesSymbol, this.pipeline);
        return Object.assign(context3, {
          props,
          redirect,
          getActionResult: createGetActionResult(context3.locals),
          callAction: createCallAction(context3)
        });
      }
      async #executeRewrite(reroutePayload) {
        this.pipeline.logger.debug("router", "Calling rewrite: ", reroutePayload);
        const oldPathname = this.pathname;
        const { routeData, componentInstance, newUrl, pathname } = await this.pipeline.tryRewrite(
          reroutePayload,
          this.request
        );
        if (this.pipeline.serverLike && !this.routeData.prerender && routeData.prerender) {
          throw new AstroError({
            ...ForbiddenRewrite,
            message: ForbiddenRewrite.message(this.pathname, pathname, routeData.component),
            hint: ForbiddenRewrite.hint(routeData.component)
          });
        }
        this.routeData = routeData;
        if (reroutePayload instanceof Request) {
          this.request = reroutePayload;
        } else {
          this.request = copyRequest(
            newUrl,
            this.request,
            // need to send the flag of the previous routeData
            routeData.prerender,
            this.pipeline.logger,
            this.routeData.route
          );
        }
        this.url = new URL(this.request.url);
        this.cookies = new AstroCookies(this.request);
        this.params = getParams(routeData, pathname);
        this.pathname = pathname;
        this.isRewriting = true;
        this.status = 200;
        setOriginPathname(this.request, oldPathname);
        return await this.render(componentInstance);
      }
      createActionAPIContext() {
        const renderContext = this;
        const { cookies, params, pipeline, url } = this;
        const generator = `Astro v${ASTRO_VERSION}`;
        const rewrite = /* @__PURE__ */ __name(async (reroutePayload) => {
          return await this.#executeRewrite(reroutePayload);
        }, "rewrite");
        return {
          cookies,
          routePattern: this.routeData.route,
          isPrerendered: this.routeData.prerender,
          get clientAddress() {
            return renderContext.getClientAddress();
          },
          get currentLocale() {
            return renderContext.computeCurrentLocale();
          },
          generator,
          get locals() {
            return renderContext.locals;
          },
          set locals(_2) {
            throw new AstroError(LocalsReassigned);
          },
          params,
          get preferredLocale() {
            return renderContext.computePreferredLocale();
          },
          get preferredLocaleList() {
            return renderContext.computePreferredLocaleList();
          },
          rewrite,
          request: this.request,
          site: pipeline.site,
          url,
          get originPathname() {
            return getOriginPathname(renderContext.request);
          },
          get session() {
            if (this.isPrerendered) {
              pipeline.logger.warn(
                "session",
                `context.session was used when rendering the route ${green(this.routePattern)}, but it is not available on prerendered routes. If you need access to sessions, make sure that the route is server-rendered using \`export const prerender = false;\` or by setting \`output\` to \`"server"\` in your Astro config to make all your routes server-rendered by default. For more information, see https://docs.astro.build/en/guides/sessions/`
              );
              return void 0;
            }
            if (!renderContext.session) {
              pipeline.logger.warn(
                "session",
                `context.session was used when rendering the route ${green(this.routePattern)}, but no storage configuration was provided. Either configure the storage manually or use an adapter that provides session storage. For more information, see https://docs.astro.build/en/guides/sessions/`
              );
              return void 0;
            }
            return renderContext.session;
          }
        };
      }
      async createResult(mod, ctx) {
        const { cookies, pathname, pipeline, routeData, status } = this;
        const { clientDirectives, inlinedScripts, compressHTML, manifest: manifest2, renderers: renderers2, resolve } = pipeline;
        const { links, scripts, styles } = await pipeline.headElements(routeData);
        const componentMetadata = await pipeline.componentMetadata(routeData) ?? manifest2.componentMetadata;
        const headers = new Headers({ "Content-Type": "text/html" });
        const partial = typeof this.partial === "boolean" ? this.partial : Boolean(mod.partial);
        const actionResult = hasActionPayload(this.locals) ? deserializeActionResult(this.locals._actionPayload.actionResult) : void 0;
        const response = {
          status: actionResult?.error ? actionResult?.error.status : status,
          statusText: actionResult?.error ? actionResult?.error.type : "OK",
          get headers() {
            return headers;
          },
          // Disallow `Astro.response.headers = new Headers`
          set headers(_2) {
            throw new AstroError(AstroResponseHeadersReassigned);
          }
        };
        const result = {
          base: manifest2.base,
          userAssetsBase: manifest2.userAssetsBase,
          cancelled: false,
          clientDirectives,
          inlinedScripts,
          componentMetadata,
          compressHTML,
          cookies,
          /** This function returns the `Astro` faux-global */
          createAstro: /* @__PURE__ */ __name((astroGlobal, props, slots) => this.createAstro(result, astroGlobal, props, slots, ctx), "createAstro"),
          links,
          params: this.params,
          partial,
          pathname,
          renderers: renderers2,
          resolve,
          response,
          request: this.request,
          scripts,
          styles,
          actionResult,
          serverIslandNameMap: manifest2.serverIslandNameMap ?? /* @__PURE__ */ new Map(),
          key: manifest2.key,
          trailingSlash: manifest2.trailingSlash,
          _metadata: {
            hasHydrationScript: false,
            rendererSpecificHydrationScripts: /* @__PURE__ */ new Set(),
            hasRenderedHead: false,
            renderedScripts: /* @__PURE__ */ new Set(),
            hasDirectives: /* @__PURE__ */ new Set(),
            hasRenderedServerIslandRuntime: false,
            headInTree: false,
            extraHead: [],
            propagators: /* @__PURE__ */ new Set()
          }
        };
        return result;
      }
      #astroPagePartial;
      /**
       * The Astro global is sourced in 3 different phases:
       * - **Static**: `.generator` and `.glob` is printed by the compiler, instantiated once per process per astro file
       * - **Page-level**: `.request`, `.cookies`, `.locals` etc. These remain the same for the duration of the request.
       * - **Component-level**: `.props`, `.slots`, and `.self` are unique to each _use_ of each component.
       *
       * The page level partial is used as the prototype of the user-visible `Astro` global object, which is instantiated once per use of a component.
       */
      createAstro(result, astroStaticPartial, props, slotValues, apiContext) {
        let astroPagePartial;
        if (this.isRewriting) {
          astroPagePartial = this.#astroPagePartial = this.createAstroPagePartial(
            result,
            astroStaticPartial,
            apiContext
          );
        } else {
          astroPagePartial = this.#astroPagePartial ??= this.createAstroPagePartial(
            result,
            astroStaticPartial,
            apiContext
          );
        }
        const astroComponentPartial = { props, self: null };
        const Astro = Object.assign(
          Object.create(astroPagePartial),
          astroComponentPartial
        );
        let _slots;
        Object.defineProperty(Astro, "slots", {
          get: /* @__PURE__ */ __name(() => {
            if (!_slots) {
              _slots = new Slots(
                result,
                slotValues,
                this.pipeline.logger
              );
            }
            return _slots;
          }, "get")
        });
        return Astro;
      }
      createAstroPagePartial(result, astroStaticPartial, apiContext) {
        const renderContext = this;
        const { cookies, locals, params, pipeline, url } = this;
        const { response } = result;
        const redirect = /* @__PURE__ */ __name((path, status = 302) => {
          if (this.request[responseSentSymbol]) {
            throw new AstroError({
              ...ResponseSentError
            });
          }
          return new Response(null, { status, headers: { Location: path } });
        }, "redirect");
        const rewrite = /* @__PURE__ */ __name(async (reroutePayload) => {
          return await this.#executeRewrite(reroutePayload);
        }, "rewrite");
        const callAction = createCallAction(apiContext);
        return {
          generator: astroStaticPartial.generator,
          glob: astroStaticPartial.glob,
          routePattern: this.routeData.route,
          isPrerendered: this.routeData.prerender,
          cookies,
          get session() {
            if (this.isPrerendered) {
              pipeline.logger.warn(
                "session",
                `Astro.session was used when rendering the route ${green(this.routePattern)}, but it is not available on prerendered pages. If you need access to sessions, make sure that the page is server-rendered using \`export const prerender = false;\` or by setting \`output\` to \`"server"\` in your Astro config to make all your pages server-rendered by default. For more information, see https://docs.astro.build/en/guides/sessions/`
              );
              return void 0;
            }
            if (!renderContext.session) {
              pipeline.logger.warn(
                "session",
                `Astro.session was used when rendering the route ${green(this.routePattern)}, but no storage configuration was provided. Either configure the storage manually or use an adapter that provides session storage. For more information, see https://docs.astro.build/en/guides/sessions/`
              );
              return void 0;
            }
            return renderContext.session;
          },
          get clientAddress() {
            return renderContext.getClientAddress();
          },
          get currentLocale() {
            return renderContext.computeCurrentLocale();
          },
          params,
          get preferredLocale() {
            return renderContext.computePreferredLocale();
          },
          get preferredLocaleList() {
            return renderContext.computePreferredLocaleList();
          },
          locals,
          redirect,
          rewrite,
          request: this.request,
          response,
          site: pipeline.site,
          getActionResult: createGetActionResult(locals),
          get callAction() {
            return callAction;
          },
          url,
          get originPathname() {
            return getOriginPathname(renderContext.request);
          }
        };
      }
      getClientAddress() {
        const { pipeline, request, routeData, clientAddress } = this;
        if (routeData.prerender) {
          throw new AstroError({
            ...PrerenderClientAddressNotAvailable,
            message: PrerenderClientAddressNotAvailable.message(routeData.component)
          });
        }
        if (clientAddress) {
          return clientAddress;
        }
        if (clientAddressSymbol in request) {
          return Reflect.get(request, clientAddressSymbol);
        }
        if (pipeline.adapterName) {
          throw new AstroError({
            ...ClientAddressNotAvailable,
            message: ClientAddressNotAvailable.message(pipeline.adapterName)
          });
        }
        throw new AstroError(StaticClientAddressNotAvailable);
      }
      /**
       * API Context may be created multiple times per request, i18n data needs to be computed only once.
       * So, it is computed and saved here on creation of the first APIContext and reused for later ones.
       */
      #currentLocale;
      computeCurrentLocale() {
        const {
          url,
          pipeline: { i18n },
          routeData
        } = this;
        if (!i18n) return;
        const { defaultLocale, locales, strategy } = i18n;
        const fallbackTo = strategy === "pathname-prefix-other-locales" || strategy === "domains-prefix-other-locales" ? defaultLocale : void 0;
        if (this.#currentLocale) {
          return this.#currentLocale;
        }
        let computedLocale;
        if (isRouteServerIsland(routeData)) {
          let referer = this.request.headers.get("referer");
          if (referer) {
            if (URL.canParse(referer)) {
              referer = new URL(referer).pathname;
            }
            computedLocale = computeCurrentLocale(referer, locales, defaultLocale);
          }
        } else {
          let pathname = routeData.pathname;
          if (!routeData.pattern.test(url.pathname)) {
            for (const fallbackRoute of routeData.fallbackRoutes) {
              if (fallbackRoute.pattern.test(url.pathname)) {
                pathname = fallbackRoute.pathname;
                break;
              }
            }
          }
          pathname = pathname && !isRoute404or500(routeData) ? pathname : url.pathname;
          computedLocale = computeCurrentLocale(pathname, locales, defaultLocale);
        }
        this.#currentLocale = computedLocale ?? fallbackTo;
        return this.#currentLocale;
      }
      #preferredLocale;
      computePreferredLocale() {
        const {
          pipeline: { i18n },
          request
        } = this;
        if (!i18n) return;
        return this.#preferredLocale ??= computePreferredLocale(request, i18n.locales);
      }
      #preferredLocaleList;
      computePreferredLocaleList() {
        const {
          pipeline: { i18n },
          request
        } = this;
        if (!i18n) return;
        return this.#preferredLocaleList ??= computePreferredLocaleList(request, i18n.locales);
      }
    };
    __name(sequence, "sequence");
    __name(defineMiddleware, "defineMiddleware");
  }
});

// .wrangler/tmp/pages-aJ3rp1/chunks/cloudflare-kv-binding_DMly_2Gl.mjs
var cloudflare_kv_binding_DMly_2Gl_exports = {};
__export(cloudflare_kv_binding_DMly_2Gl_exports, {
  default: () => cloudflareKvBinding
});
function defineDriver2(factory) {
  return factory;
}
function normalizeKey2(key, sep = ":") {
  if (!key) {
    return "";
  }
  return key.replace(/[:/\\]/g, sep).replace(/^[:/\\]|[:/\\]$/g, "");
}
function joinKeys2(...keys) {
  return keys.map((key) => normalizeKey2(key)).filter(Boolean).join(":");
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, createError);
  }
  return err;
}
function getBinding(binding3) {
  let bindingName = "[binding]";
  if (typeof binding3 === "string") {
    bindingName = binding3;
    binding3 = globalThis[bindingName] || globalThis.__env__?.[bindingName];
  }
  if (!binding3) {
    throw createError(
      "cloudflare",
      `Invalid binding \`${bindingName}\`: \`${binding3}\``
    );
  }
  for (const key of ["get", "put", "delete"]) {
    if (!(key in binding3)) {
      throw createError(
        "cloudflare",
        `Invalid binding \`${bindingName}\`: \`${key}\` key is missing`
      );
    }
  }
  return binding3;
}
function getKVBinding(binding3 = "STORAGE") {
  return getBinding(binding3);
}
var DRIVER_NAME2, cloudflareKvBinding;
var init_cloudflare_kv_binding_DMly_2Gl = __esm({
  ".wrangler/tmp/pages-aJ3rp1/chunks/cloudflare-kv-binding_DMly_2Gl.mjs"() {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    __name(defineDriver2, "defineDriver");
    __name(normalizeKey2, "normalizeKey");
    __name(joinKeys2, "joinKeys");
    __name(createError, "createError");
    __name(getBinding, "getBinding");
    __name(getKVBinding, "getKVBinding");
    DRIVER_NAME2 = "cloudflare-kv-binding";
    cloudflareKvBinding = defineDriver2((opts) => {
      const r2 = /* @__PURE__ */ __name((key = "") => opts.base ? joinKeys2(opts.base, key) : key, "r");
      async function getKeys(base = "") {
        base = r2(base);
        const binding3 = getKVBinding(opts.binding);
        const keys = [];
        let cursor = void 0;
        do {
          const kvList = await binding3.list({ prefix: base || void 0, cursor });
          keys.push(...kvList.keys);
          cursor = kvList.list_complete ? void 0 : kvList.cursor;
        } while (cursor);
        return keys.map((key) => key.name);
      }
      __name(getKeys, "getKeys");
      return {
        name: DRIVER_NAME2,
        options: opts,
        getInstance: /* @__PURE__ */ __name(() => getKVBinding(opts.binding), "getInstance"),
        async hasItem(key) {
          key = r2(key);
          const binding3 = getKVBinding(opts.binding);
          return await binding3.get(key) !== null;
        },
        getItem(key) {
          key = r2(key);
          const binding3 = getKVBinding(opts.binding);
          return binding3.get(key);
        },
        setItem(key, value, topts) {
          key = r2(key);
          const binding3 = getKVBinding(opts.binding);
          return binding3.put(
            key,
            value,
            topts ? {
              expirationTtl: topts?.ttl ? Math.max(topts.ttl, opts.minTTL ?? 60) : void 0,
              ...topts
            } : void 0
          );
        },
        removeItem(key) {
          key = r2(key);
          const binding3 = getKVBinding(opts.binding);
          return binding3.delete(key);
        },
        getKeys(base) {
          return getKeys(base).then(
            (keys) => keys.map((key) => opts.base ? key.slice(opts.base.length) : key)
          );
        },
        async clear(base) {
          const binding3 = getKVBinding(opts.binding);
          const keys = await getKeys(base);
          await Promise.all(keys.map((key) => binding3.delete(key)));
        }
      };
    });
  }
});

// .wrangler/tmp/pages-aJ3rp1/pages/api/getlocations.astro.mjs
var getlocations_astro_exports = {};
var init_getlocations_astro = __esm({
  ".wrangler/tmp/pages-aJ3rp1/pages/api/getlocations.astro.mjs"() {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// .wrangler/tmp/pages-aJ3rp1/pages/shapes/_shape_.astro.mjs
var shape_astro_exports = {};
var init_shape_astro = __esm({
  ".wrangler/tmp/pages-aJ3rp1/pages/shapes/_shape_.astro.mjs"() {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// .wrangler/tmp/pages-aJ3rp1/pages/shapes.astro.mjs
var shapes_astro_exports = {};
var init_shapes_astro = __esm({
  ".wrangler/tmp/pages-aJ3rp1/pages/shapes.astro.mjs"() {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// .wrangler/tmp/pages-aJ3rp1/pages/_country_/_state_/_city_.astro.mjs
var city_astro_exports = {};
var init_city_astro = __esm({
  ".wrangler/tmp/pages-aJ3rp1/pages/_country_/_state_/_city_.astro.mjs"() {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// .wrangler/tmp/pages-aJ3rp1/pages/_country_/_state_.astro.mjs
var state_astro_exports = {};
var init_state_astro = __esm({
  ".wrangler/tmp/pages-aJ3rp1/pages/_country_/_state_.astro.mjs"() {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// .wrangler/tmp/pages-aJ3rp1/pages/_country_.astro.mjs
var country_astro_exports = {};
var init_country_astro = __esm({
  ".wrangler/tmp/pages-aJ3rp1/pages/_country_.astro.mjs"() {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// .wrangler/tmp/pages-aJ3rp1/pages/index.astro.mjs
var index_astro_exports = {};
var init_index_astro = __esm({
  ".wrangler/tmp/pages-aJ3rp1/pages/index.astro.mjs"() {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// .wrangler/tmp/pages-aJ3rp1/_noop-actions.mjs
var noop_actions_exports = {};
__export(noop_actions_exports, {
  server: () => server
});
var server;
var init_noop_actions = __esm({
  ".wrangler/tmp/pages-aJ3rp1/_noop-actions.mjs"() {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    server = {};
  }
});

// .wrangler/tmp/pages-aJ3rp1/_astro-internal_middleware.mjs
var astro_internal_middleware_exports = {};
__export(astro_internal_middleware_exports, {
  onRequest: () => onRequest
});
var onRequest$1, onRequest;
var init_astro_internal_middleware = __esm({
  ".wrangler/tmp/pages-aJ3rp1/_astro-internal_middleware.mjs"() {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_astro_designed_error_pages_Bb_tmHv();
    init_server_jD9syGVz();
    init_index_DfvzXTkm();
    globalThis.process ??= {};
    globalThis.process.env ??= {};
    onRequest$1 = /* @__PURE__ */ __name((context3, next) => {
      if (context3.isPrerendered) {
        context3.locals.runtime ??= {
          env: process.env
        };
      }
      return next();
    }, "onRequest$1");
    onRequest = sequence(
      onRequest$1
    );
  }
});

// .wrangler/tmp/bundle-XLZcjn/middleware-loader.entry.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-XLZcjn/middleware-insertion-facade.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/pages-aJ3rp1/bmb0tnk8bku.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/pages-aJ3rp1/bundledWorker-0.043739203584233666.mjs
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
import { Writable as Writable2 } from "node:stream";
import { EventEmitter as EventEmitter2 } from "node:events";

// .wrangler/tmp/pages-aJ3rp1/renderers.mjs
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
globalThis.process ??= {};
globalThis.process.env ??= {};
var ERROR = Symbol("error");
function castError(err) {
  if (err instanceof Error) return err;
  return new Error(typeof err === "string" ? err : "Unknown error", {
    cause: err
  });
}
__name(castError, "castError");
function handleError(err, owner = Owner) {
  const fns = owner && owner.context && owner.context[ERROR];
  const error5 = castError(err);
  if (!fns) throw error5;
  try {
    for (const f2 of fns) f2(error5);
  } catch (e) {
    handleError(e, owner && owner.owner || null);
  }
}
__name(handleError, "handleError");
var UNOWNED = {
  context: null,
  owner: null,
  owned: null,
  cleanups: null
};
var Owner = null;
function createOwner() {
  const o2 = {
    owner: Owner,
    context: Owner ? Owner.context : null,
    owned: null,
    cleanups: null
  };
  if (Owner) {
    if (!Owner.owned) Owner.owned = [o2];
    else Owner.owned.push(o2);
  }
  return o2;
}
__name(createOwner, "createOwner");
function createRoot(fn, detachedOwner) {
  const owner = Owner, current = owner, root = fn.length === 0 ? UNOWNED : {
    context: current ? current.context : null,
    owner: current,
    owned: null,
    cleanups: null
  };
  Owner = root;
  let result;
  try {
    result = fn(fn.length === 0 ? () => {
    } : () => cleanNode(root));
  } catch (err) {
    handleError(err);
  } finally {
    Owner = owner;
  }
  return result;
}
__name(createRoot, "createRoot");
function createMemo(fn, value) {
  Owner = createOwner();
  let v2;
  try {
    v2 = fn(value);
  } catch (err) {
    handleError(err);
  } finally {
    Owner = Owner.owner;
  }
  return () => v2;
}
__name(createMemo, "createMemo");
function cleanNode(node) {
  if (node.owned) {
    for (let i2 = 0; i2 < node.owned.length; i2++) cleanNode(node.owned[i2]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (let i2 = 0; i2 < node.cleanups.length; i2++) node.cleanups[i2]();
    node.cleanups = null;
  }
}
__name(cleanNode, "cleanNode");
function catchError(fn, handler) {
  const owner = createOwner();
  owner.context = {
    ...owner.context,
    [ERROR]: [handler]
  };
  Owner = owner;
  try {
    return fn();
  } catch (err) {
    handleError(err);
  } finally {
    Owner = Owner.owner;
  }
}
__name(catchError, "catchError");
function createContext(defaultValue) {
  const id = Symbol("context");
  return {
    id,
    Provider: createProvider(id),
    defaultValue
  };
}
__name(createContext, "createContext");
function children(fn) {
  const memo = createMemo(() => resolveChildren(fn()));
  memo.toArray = () => {
    const c2 = memo();
    return Array.isArray(c2) ? c2 : c2 != null ? [c2] : [];
  };
  return memo;
}
__name(children, "children");
function runWithOwner(o2, fn) {
  const prev = Owner;
  Owner = o2;
  try {
    return fn();
  } catch (err) {
    handleError(err);
  } finally {
    Owner = prev;
  }
}
__name(runWithOwner, "runWithOwner");
function resolveChildren(children2) {
  if (typeof children2 === "function" && !children2.length) return resolveChildren(children2());
  if (Array.isArray(children2)) {
    const results = [];
    for (let i2 = 0; i2 < children2.length; i2++) {
      const result = resolveChildren(children2[i2]);
      Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
    }
    return results;
  }
  return children2;
}
__name(resolveChildren, "resolveChildren");
function createProvider(id) {
  return /* @__PURE__ */ __name(function provider(props) {
    return createMemo(() => {
      Owner.context = {
        ...Owner.context,
        [id]: props.value
      };
      return children(() => props.children);
    });
  }, "provider");
}
__name(createProvider, "createProvider");
function escape$1(s2, attr) {
  const t = typeof s2;
  if (t !== "string") {
    if (t === "function") return escape$1(s2());
    if (Array.isArray(s2)) {
      for (let i2 = 0; i2 < s2.length; i2++) s2[i2] = escape$1(s2[i2]);
      return s2;
    }
    return s2;
  }
  const delim = "<";
  const escDelim = "&lt;";
  let iDelim = s2.indexOf(delim);
  let iAmp = s2.indexOf("&");
  if (iDelim < 0 && iAmp < 0) return s2;
  let left = 0, out = "";
  while (iDelim >= 0 && iAmp >= 0) {
    if (iDelim < iAmp) {
      if (left < iDelim) out += s2.substring(left, iDelim);
      out += escDelim;
      left = iDelim + 1;
      iDelim = s2.indexOf(delim, left);
    } else {
      if (left < iAmp) out += s2.substring(left, iAmp);
      out += "&amp;";
      left = iAmp + 1;
      iAmp = s2.indexOf("&", left);
    }
  }
  if (iDelim >= 0) {
    do {
      if (left < iDelim) out += s2.substring(left, iDelim);
      out += escDelim;
      left = iDelim + 1;
      iDelim = s2.indexOf(delim, left);
    } while (iDelim >= 0);
  } else while (iAmp >= 0) {
    if (left < iAmp) out += s2.substring(left, iAmp);
    out += "&amp;";
    left = iAmp + 1;
    iAmp = s2.indexOf("&", left);
  }
  return left < s2.length ? out + s2.substring(left) : out;
}
__name(escape$1, "escape$1");
function resolveSSRNode$1(node) {
  const t = typeof node;
  if (t === "string") return node;
  if (node == null || t === "boolean") return "";
  if (Array.isArray(node)) {
    let prev = {};
    let mapped = "";
    for (let i2 = 0, len = node.length; i2 < len; i2++) {
      if (typeof prev !== "object" && typeof node[i2] !== "object") mapped += `<!--!$-->`;
      mapped += resolveSSRNode$1(prev = node[i2]);
    }
    return mapped;
  }
  if (t === "object") return node.t;
  if (t === "function") return resolveSSRNode$1(node());
  return String(node);
}
__name(resolveSSRNode$1, "resolveSSRNode$1");
var sharedConfig = {
  context: void 0,
  getContextId() {
    if (!this.context) throw new Error(`getContextId cannot be used under non-hydrating context`);
    return getContextId(this.context.count);
  },
  getNextContextId() {
    if (!this.context) throw new Error(`getNextContextId cannot be used under non-hydrating context`);
    return getContextId(this.context.count++);
  }
};
function getContextId(count4) {
  const num = String(count4), len = num.length - 1;
  return sharedConfig.context.id + (len ? String.fromCharCode(96 + len) : "") + num;
}
__name(getContextId, "getContextId");
function setHydrateContext(context3) {
  sharedConfig.context = context3;
}
__name(setHydrateContext, "setHydrateContext");
function nextHydrateContext() {
  return sharedConfig.context ? {
    ...sharedConfig.context,
    id: sharedConfig.getNextContextId(),
    count: 0
  } : void 0;
}
__name(nextHydrateContext, "nextHydrateContext");
function createComponent(Comp, props) {
  if (sharedConfig.context && !sharedConfig.context.noHydrate) {
    const c2 = sharedConfig.context;
    setHydrateContext(nextHydrateContext());
    const r2 = Comp(props || {});
    setHydrateContext(c2);
    return r2;
  }
  return Comp(props || {});
}
__name(createComponent, "createComponent");
var SuspenseContext = createContext();
function suspenseComplete(c2) {
  for (const r2 of c2.resources.values()) {
    if (r2.loading) return false;
  }
  return true;
}
__name(suspenseComplete, "suspenseComplete");
function Suspense(props) {
  let done;
  const ctx = sharedConfig.context;
  const id = sharedConfig.getContextId();
  const o2 = createOwner();
  const value = ctx.suspense[id] || (ctx.suspense[id] = {
    resources: /* @__PURE__ */ new Map(),
    completed: /* @__PURE__ */ __name(() => {
      const res2 = runSuspense();
      if (suspenseComplete(value)) {
        done(resolveSSRNode$1(escape$1(res2)));
      }
    }, "completed")
  });
  function suspenseError(err) {
    if (!done || !done(void 0, err)) {
      runWithOwner(o2.owner, () => {
        throw err;
      });
    }
  }
  __name(suspenseError, "suspenseError");
  function runSuspense() {
    setHydrateContext({
      ...ctx,
      count: 0
    });
    cleanNode(o2);
    return runWithOwner(o2, () => createComponent(SuspenseContext.Provider, {
      value,
      get children() {
        return catchError(() => props.children, suspenseError);
      }
    }));
  }
  __name(runSuspense, "runSuspense");
  const res = runSuspense();
  if (suspenseComplete(value)) {
    delete ctx.suspense[id];
    return res;
  }
  done = ctx.async ? ctx.registerFragment(id) : void 0;
  return catchError(() => {
    if (ctx.async) {
      setHydrateContext({
        ...ctx,
        count: 0,
        id: ctx.id + "0F",
        noHydrate: true
      });
      const res2 = {
        t: `<template id="pl-${id}"></template>${resolveSSRNode$1(escape$1(props.fallback))}<!--pl-${id}-->`
      };
      setHydrateContext(ctx);
      return res2;
    }
    setHydrateContext({
      ...ctx,
      count: 0,
      id: ctx.id + "0F"
    });
    ctx.serialize(id, "$$f");
    return props.fallback;
  }, suspenseError);
}
__name(Suspense, "Suspense");
var R = ((a) => (a[a.AggregateError = 1] = "AggregateError", a[a.ArrowFunction = 2] = "ArrowFunction", a[a.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", a[a.ObjectAssign = 8] = "ObjectAssign", a[a.BigIntTypedArray = 16] = "BigIntTypedArray", a))(R || {});
function Nr(o2) {
  switch (o2) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return;
  }
}
__name(Nr, "Nr");
function d(o2) {
  let e = "", r2 = 0, t;
  for (let n = 0, a = o2.length; n < a; n++) t = Nr(o2[n]), t && (e += o2.slice(r2, n) + t, r2 = n + 1);
  return r2 === 0 ? e = o2 : e += o2.slice(r2), e;
}
__name(d, "d");
var O = "__SEROVAL_REFS__";
var Q = "$R";
var ae = `self.${Q}`;
function xr(o2) {
  return o2 == null ? `${ae}=${ae}||[]` : `(${ae}=${ae}||{})["${d(o2)}"]=[]`;
}
__name(xr, "xr");
function f$1(o2, e) {
  if (!o2) throw e;
}
__name(f$1, "f$1");
var Be = /* @__PURE__ */ new Map();
var C$1 = /* @__PURE__ */ new Map();
function je(o2) {
  return Be.has(o2);
}
__name(je, "je");
function Ke(o2) {
  return f$1(je(o2), new ie$1(o2)), Be.get(o2);
}
__name(Ke, "Ke");
typeof globalThis != "undefined" ? Object.defineProperty(globalThis, O, { value: C$1, configurable: true, writable: false, enumerable: false }) : typeof window != "undefined" ? Object.defineProperty(window, O, { value: C$1, configurable: true, writable: false, enumerable: false }) : typeof self != "undefined" ? Object.defineProperty(self, O, { value: C$1, configurable: true, writable: false, enumerable: false }) : typeof global != "undefined" && Object.defineProperty(global, O, { value: C$1, configurable: true, writable: false, enumerable: false });
function Hr(o2) {
  return o2;
}
__name(Hr, "Hr");
function Ye(o2, e) {
  for (let r2 = 0, t = e.length; r2 < t; r2++) {
    let n = e[r2];
    o2.has(n) || (o2.add(n), n.extends && Ye(o2, n.extends));
  }
}
__name(Ye, "Ye");
function m$1(o2) {
  if (o2) {
    let e = /* @__PURE__ */ new Set();
    return Ye(e, o2), [...e];
  }
}
__name(m$1, "m$1");
var $e = { 0: "Symbol.asyncIterator", 1: "Symbol.hasInstance", 2: "Symbol.isConcatSpreadable", 3: "Symbol.iterator", 4: "Symbol.match", 5: "Symbol.matchAll", 6: "Symbol.replace", 7: "Symbol.search", 8: "Symbol.species", 9: "Symbol.split", 10: "Symbol.toPrimitive", 11: "Symbol.toStringTag", 12: "Symbol.unscopables" };
var ce = { [Symbol.asyncIterator]: 0, [Symbol.hasInstance]: 1, [Symbol.isConcatSpreadable]: 2, [Symbol.iterator]: 3, [Symbol.match]: 4, [Symbol.matchAll]: 5, [Symbol.replace]: 6, [Symbol.search]: 7, [Symbol.species]: 8, [Symbol.split]: 9, [Symbol.toPrimitive]: 10, [Symbol.toStringTag]: 11, [Symbol.unscopables]: 12 };
var qe = { 2: "!0", 3: "!1", 1: "void 0", 0: "null", 4: "-0", 5: "1/0", 6: "-1/0", 7: "0/0" };
var ue$1 = { 0: "Error", 1: "EvalError", 2: "RangeError", 3: "ReferenceError", 4: "SyntaxError", 5: "TypeError", 6: "URIError" };
var s$1 = void 0;
function u$1(o2, e, r2, t, n, a, i2, l2, c2, p2, h2, X2) {
  return { t: o2, i: e, s: r2, l: t, c: n, m: a, p: i2, e: l2, a: c2, f: p2, b: h2, o: X2 };
}
__name(u$1, "u$1");
function x(o2) {
  return u$1(2, s$1, o2, s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1);
}
__name(x, "x");
var I$1 = x(2);
var A$1 = x(3);
var pe$1 = x(1);
var de = x(0);
var Xe = x(4);
var Qe = x(5);
var er = x(6);
var rr = x(7);
function me$1(o2) {
  return o2 instanceof EvalError ? 1 : o2 instanceof RangeError ? 2 : o2 instanceof ReferenceError ? 3 : o2 instanceof SyntaxError ? 4 : o2 instanceof TypeError ? 5 : o2 instanceof URIError ? 6 : 0;
}
__name(me$1, "me$1");
function wr(o2) {
  let e = ue$1[me$1(o2)];
  return o2.name !== e ? { name: o2.name } : o2.constructor.name !== e ? { name: o2.constructor.name } : {};
}
__name(wr, "wr");
function j$1(o2, e) {
  let r2 = wr(o2), t = Object.getOwnPropertyNames(o2);
  for (let n = 0, a = t.length, i2; n < a; n++) i2 = t[n], i2 !== "name" && i2 !== "message" && (i2 === "stack" ? e & 4 && (r2 = r2 || {}, r2[i2] = o2[i2]) : (r2 = r2 || {}, r2[i2] = o2[i2]));
  return r2;
}
__name(j$1, "j$1");
function fe$1(o2) {
  return Object.isFrozen(o2) ? 3 : Object.isSealed(o2) ? 2 : Object.isExtensible(o2) ? 0 : 1;
}
__name(fe$1, "fe$1");
function ge(o2) {
  switch (o2) {
    case Number.POSITIVE_INFINITY:
      return Qe;
    case Number.NEGATIVE_INFINITY:
      return er;
  }
  return o2 !== o2 ? rr : Object.is(o2, -0) ? Xe : u$1(0, s$1, o2, s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1);
}
__name(ge, "ge");
function w$1(o2) {
  return u$1(1, s$1, d(o2), s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1);
}
__name(w$1, "w$1");
function Se(o2) {
  return u$1(3, s$1, "" + o2, s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1);
}
__name(Se, "Se");
function sr(o2) {
  return u$1(4, o2, s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1);
}
__name(sr, "sr");
function he(o2, e) {
  let r2 = e.valueOf();
  return u$1(5, o2, r2 !== r2 ? "" : e.toISOString(), s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1);
}
__name(he, "he");
function ye(o2, e) {
  return u$1(6, o2, s$1, s$1, d(e.source), e.flags, s$1, s$1, s$1, s$1, s$1, s$1);
}
__name(ye, "ye");
function ve(o2, e) {
  let r2 = new Uint8Array(e), t = r2.length, n = new Array(t);
  for (let a = 0; a < t; a++) n[a] = r2[a];
  return u$1(19, o2, n, s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1);
}
__name(ve, "ve");
function or(o2, e) {
  return u$1(17, o2, ce[e], s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1);
}
__name(or, "or");
function nr(o2, e) {
  return u$1(18, o2, d(Ke(e)), s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1);
}
__name(nr, "nr");
function _$1(o2, e, r2) {
  return u$1(25, o2, r2, s$1, d(e), s$1, s$1, s$1, s$1, s$1, s$1, s$1);
}
__name(_$1, "_$1");
function Ne(o2, e, r2) {
  return u$1(9, o2, s$1, e.length, s$1, s$1, s$1, s$1, r2, s$1, s$1, fe$1(e));
}
__name(Ne, "Ne");
function be(o2, e) {
  return u$1(21, o2, s$1, s$1, s$1, s$1, s$1, s$1, s$1, e, s$1, s$1);
}
__name(be, "be");
function xe(o2, e, r2) {
  return u$1(15, o2, s$1, e.length, e.constructor.name, s$1, s$1, s$1, s$1, r2, e.byteOffset, s$1);
}
__name(xe, "xe");
function Ie(o2, e, r2) {
  return u$1(16, o2, s$1, e.length, e.constructor.name, s$1, s$1, s$1, s$1, r2, e.byteOffset, s$1);
}
__name(Ie, "Ie");
function Ae(o2, e, r2) {
  return u$1(20, o2, s$1, e.byteLength, s$1, s$1, s$1, s$1, s$1, r2, e.byteOffset, s$1);
}
__name(Ae, "Ae");
function we(o2, e, r2) {
  return u$1(13, o2, me$1(e), s$1, s$1, d(e.message), r2, s$1, s$1, s$1, s$1, s$1);
}
__name(we, "we");
function Ee(o2, e, r2) {
  return u$1(14, o2, me$1(e), s$1, s$1, d(e.message), r2, s$1, s$1, s$1, s$1, s$1);
}
__name(Ee, "Ee");
function Pe(o2, e, r2) {
  return u$1(7, o2, s$1, e, s$1, s$1, s$1, s$1, r2, s$1, s$1, s$1);
}
__name(Pe, "Pe");
function M(o2, e) {
  return u$1(28, s$1, s$1, s$1, s$1, s$1, s$1, s$1, [o2, e], s$1, s$1, s$1);
}
__name(M, "M");
function U(o2, e) {
  return u$1(30, s$1, s$1, s$1, s$1, s$1, s$1, s$1, [o2, e], s$1, s$1, s$1);
}
__name(U, "U");
function L(o2, e, r2) {
  return u$1(31, o2, s$1, s$1, s$1, s$1, s$1, s$1, r2, e, s$1, s$1);
}
__name(L, "L");
function Re(o2, e) {
  return u$1(32, o2, s$1, s$1, s$1, s$1, s$1, s$1, s$1, e, s$1, s$1);
}
__name(Re, "Re");
function Oe(o2, e) {
  return u$1(33, o2, s$1, s$1, s$1, s$1, s$1, s$1, s$1, e, s$1, s$1);
}
__name(Oe, "Oe");
function Ce(o2, e) {
  return u$1(34, o2, s$1, s$1, s$1, s$1, s$1, s$1, s$1, e, s$1, s$1);
}
__name(Ce, "Ce");
var { toString: _e } = Object.prototype;
function Er(o2, e) {
  return e instanceof Error ? `Seroval caught an error during the ${o2} process.
  
${e.name}
${e.message}

- For more information, please check the "cause" property of this error.
- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new` : `Seroval caught an error during the ${o2} process.

"${_e.call(e)}"

For more information, please check the "cause" property of this error.`;
}
__name(Er, "Er");
var ee$1 = class ee extends Error {
  static {
    __name(this, "ee");
  }
  constructor(r2, t) {
    super(Er(r2, t));
    this.cause = t;
  }
};
var E$1 = class E extends ee$1 {
  static {
    __name(this, "E");
  }
  constructor(e) {
    super("parsing", e);
  }
};
var Te = class extends ee$1 {
  static {
    __name(this, "Te");
  }
  constructor(e) {
    super("serialization", e);
  }
};
var g$1 = class g extends Error {
  static {
    __name(this, "g");
  }
  constructor(r2) {
    super(`The value ${_e.call(r2)} of type "${typeof r2}" cannot be parsed/serialized.
      
There are few workarounds for this problem:
- Transform the value in a way that it can be serialized.
- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`);
    this.value = r2;
  }
};
var y$1 = class y extends Error {
  static {
    __name(this, "y");
  }
  constructor(e) {
    super('Unsupported node type "' + e.t + '".');
  }
};
var W$1 = class W extends Error {
  static {
    __name(this, "W");
  }
  constructor(e) {
    super('Missing plugin for tag "' + e + '".');
  }
};
var ie$1 = class ie extends Error {
  static {
    __name(this, "ie");
  }
  constructor(r2) {
    super('Missing reference for the value "' + _e.call(r2) + '" of type "' + typeof r2 + '"');
    this.value = r2;
  }
};
var T$1 = class T {
  static {
    __name(this, "T");
  }
  constructor(e, r2) {
    this.value = e;
    this.replacement = r2;
  }
};
function z(o2, e, r2) {
  return o2 & 2 ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>" + (r2.startsWith("{") ? "(" + r2 + ")" : r2) : "function(" + e.join(",") + "){return " + r2 + "}";
}
__name(z, "z");
function S(o2, e, r2) {
  return o2 & 2 ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>{" + r2 + "}" : "function(" + e.join(",") + "){" + r2 + "}";
}
__name(S, "S");
var ar = {};
var ir = {};
var lr = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {} };
function Pr(o2) {
  return z(o2, ["r"], "(r.p=new Promise(" + S(o2, ["s", "f"], "r.s=s,r.f=f") + "))");
}
__name(Pr, "Pr");
function Rr(o2) {
  return S(o2, ["r", "d"], "r.s(d),r.p.s=1,r.p.v=d");
}
__name(Rr, "Rr");
function Or(o2) {
  return S(o2, ["r", "d"], "r.f(d),r.p.s=2,r.p.v=d");
}
__name(Or, "Or");
function Cr(o2) {
  return z(o2, ["b", "a", "s", "l", "p", "f", "e", "n"], "(b=[],a=!0,s=!1,l=[],p=0,f=" + S(o2, ["v", "m", "x"], "for(x=0;x<p;x++)l[x]&&l[x][m](v)") + ",n=" + S(o2, ["o", "x", "z", "c"], 'for(x=0,z=b.length;x<z;x++)(c=b[x],(!a&&x===z-1)?o[s?"return":"throw"](c):o.next(c))') + ",e=" + z(o2, ["o", "t"], "(a&&(l[t=p++]=o),n(o)," + S(o2, [], "a&&(l[t]=void 0)") + ")") + ",{__SEROVAL_STREAM__:!0,on:" + z(o2, ["o"], "e(o)") + ",next:" + S(o2, ["v"], 'a&&(b.push(v),f(v,"next"))') + ",throw:" + S(o2, ["v"], 'a&&(b.push(v),f(v,"throw"),a=s=!1,l.length=0)') + ",return:" + S(o2, ["v"], 'a&&(b.push(v),f(v,"return"),a=!1,s=!0,l.length=0)') + "})");
}
__name(Cr, "Cr");
function cr(o2, e) {
  switch (e) {
    case 0:
      return "[]";
    case 1:
      return Pr(o2);
    case 2:
      return Rr(o2);
    case 3:
      return Or(o2);
    case 4:
      return Cr(o2);
    default:
      return "";
  }
}
__name(cr, "cr");
function Fe(o2) {
  return "__SEROVAL_STREAM__" in o2;
}
__name(Fe, "Fe");
function K$1() {
  let o2 = /* @__PURE__ */ new Set(), e = [], r2 = true, t = true;
  function n(l2) {
    for (let c2 of o2.keys()) c2.next(l2);
  }
  __name(n, "n");
  function a(l2) {
    for (let c2 of o2.keys()) c2.throw(l2);
  }
  __name(a, "a");
  function i2(l2) {
    for (let c2 of o2.keys()) c2.return(l2);
  }
  __name(i2, "i");
  return { __SEROVAL_STREAM__: true, on(l2) {
    r2 && o2.add(l2);
    for (let c2 = 0, p2 = e.length; c2 < p2; c2++) {
      let h2 = e[c2];
      c2 === p2 - 1 && !r2 ? t ? l2.return(h2) : l2.throw(h2) : l2.next(h2);
    }
    return () => {
      r2 && o2.delete(l2);
    };
  }, next(l2) {
    r2 && (e.push(l2), n(l2));
  }, throw(l2) {
    r2 && (e.push(l2), a(l2), r2 = false, t = false, o2.clear());
  }, return(l2) {
    r2 && (e.push(l2), i2(l2), r2 = false, t = true, o2.clear());
  } };
}
__name(K$1, "K$1");
function Ve(o2) {
  let e = K$1(), r2 = o2[Symbol.asyncIterator]();
  async function t() {
    try {
      let n = await r2.next();
      n.done ? e.return(n.value) : (e.next(n.value), await t());
    } catch (n) {
      e.throw(n);
    }
  }
  __name(t, "t");
  return t().catch(() => {
  }), e;
}
__name(Ve, "Ve");
function J$1(o2) {
  let e = [], r2 = -1, t = -1, n = o2[Symbol.iterator]();
  for (; ; ) try {
    let a = n.next();
    if (e.push(a.value), a.done) {
      t = e.length - 1;
      break;
    }
  } catch (a) {
    r2 = e.length, e.push(a);
  }
  return { v: e, t: r2, d: t };
}
__name(J$1, "J$1");
var Y$1 = class Y {
  static {
    __name(this, "Y");
  }
  constructor(e) {
    this.marked = /* @__PURE__ */ new Set();
    this.plugins = e.plugins, this.features = 31 ^ (e.disabledFeatures || 0), this.refs = e.refs || /* @__PURE__ */ new Map();
  }
  markRef(e) {
    this.marked.add(e);
  }
  isMarked(e) {
    return this.marked.has(e);
  }
  createIndex(e) {
    let r2 = this.refs.size;
    return this.refs.set(e, r2), r2;
  }
  getIndexedValue(e) {
    let r2 = this.refs.get(e);
    return r2 != null ? (this.markRef(r2), { type: 1, value: sr(r2) }) : { type: 0, value: this.createIndex(e) };
  }
  getReference(e) {
    let r2 = this.getIndexedValue(e);
    return r2.type === 1 ? r2 : je(e) ? { type: 2, value: nr(r2.value, e) } : r2;
  }
  parseWellKnownSymbol(e) {
    let r2 = this.getReference(e);
    return r2.type !== 0 ? r2.value : (f$1(e in ce, new g$1(e)), or(r2.value, e));
  }
  parseSpecialReference(e) {
    let r2 = this.getIndexedValue(lr[e]);
    return r2.type === 1 ? r2.value : u$1(26, r2.value, e, s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1, s$1);
  }
  parseIteratorFactory() {
    let e = this.getIndexedValue(ar);
    return e.type === 1 ? e.value : u$1(27, e.value, s$1, s$1, s$1, s$1, s$1, s$1, s$1, this.parseWellKnownSymbol(Symbol.iterator), s$1, s$1);
  }
  parseAsyncIteratorFactory() {
    let e = this.getIndexedValue(ir);
    return e.type === 1 ? e.value : u$1(29, e.value, s$1, s$1, s$1, s$1, s$1, s$1, [this.parseSpecialReference(1), this.parseWellKnownSymbol(Symbol.asyncIterator)], s$1, s$1, s$1);
  }
  createObjectNode(e, r2, t, n) {
    return u$1(t ? 11 : 10, e, s$1, s$1, s$1, s$1, n, s$1, s$1, s$1, s$1, fe$1(r2));
  }
  createMapNode(e, r2, t, n) {
    return u$1(8, e, s$1, s$1, s$1, s$1, s$1, { k: r2, v: t, s: n }, s$1, this.parseSpecialReference(0), s$1, s$1);
  }
  createPromiseConstructorNode(e, r2) {
    return u$1(22, e, r2, s$1, s$1, s$1, s$1, s$1, s$1, this.parseSpecialReference(1), s$1, s$1);
  }
};
var kr = /^[$A-Z_][0-9A-Z_$]*$/i;
function Le(o2) {
  let e = o2[0];
  return (e === "$" || e === "_" || e >= "A" && e <= "Z" || e >= "a" && e <= "z") && kr.test(o2);
}
__name(Le, "Le");
function se$1(o2) {
  switch (o2.t) {
    case 0:
      return o2.s + "=" + o2.v;
    case 2:
      return o2.s + ".set(" + o2.k + "," + o2.v + ")";
    case 1:
      return o2.s + ".add(" + o2.v + ")";
    case 3:
      return o2.s + ".delete(" + o2.k + ")";
  }
}
__name(se$1, "se$1");
function Fr(o2) {
  let e = [], r2 = o2[0];
  for (let t = 1, n = o2.length, a, i2 = r2; t < n; t++) a = o2[t], a.t === 0 && a.v === i2.v ? r2 = { t: 0, s: a.s, k: s$1, v: se$1(r2) } : a.t === 2 && a.s === i2.s ? r2 = { t: 2, s: se$1(r2), k: a.k, v: a.v } : a.t === 1 && a.s === i2.s ? r2 = { t: 1, s: se$1(r2), k: s$1, v: a.v } : a.t === 3 && a.s === i2.s ? r2 = { t: 3, s: se$1(r2), k: a.k, v: s$1 } : (e.push(r2), r2 = a), i2 = a;
  return e.push(r2), e;
}
__name(Fr, "Fr");
function fr(o2) {
  if (o2.length) {
    let e = "", r2 = Fr(o2);
    for (let t = 0, n = r2.length; t < n; t++) e += se$1(r2[t]) + ",";
    return e;
  }
  return s$1;
}
__name(fr, "fr");
var Vr = "Object.create(null)";
var Dr = "new Set";
var Br = "new Map";
var jr = "Promise.resolve";
var _r = "Promise.reject";
var Mr = { 3: "Object.freeze", 2: "Object.seal", 1: "Object.preventExtensions", 0: s$1 };
var V = class {
  static {
    __name(this, "V");
  }
  constructor(e) {
    this.stack = [];
    this.flags = [];
    this.assignments = [];
    this.plugins = e.plugins, this.features = e.features, this.marked = new Set(e.markedRefs);
  }
  createFunction(e, r2) {
    return z(this.features, e, r2);
  }
  createEffectfulFunction(e, r2) {
    return S(this.features, e, r2);
  }
  markRef(e) {
    this.marked.add(e);
  }
  isMarked(e) {
    return this.marked.has(e);
  }
  pushObjectFlag(e, r2) {
    e !== 0 && (this.markRef(r2), this.flags.push({ type: e, value: this.getRefParam(r2) }));
  }
  resolveFlags() {
    let e = "";
    for (let r2 = 0, t = this.flags, n = t.length; r2 < n; r2++) {
      let a = t[r2];
      e += Mr[a.type] + "(" + a.value + "),";
    }
    return e;
  }
  resolvePatches() {
    let e = fr(this.assignments), r2 = this.resolveFlags();
    return e ? r2 ? e + r2 : e : r2;
  }
  createAssignment(e, r2) {
    this.assignments.push({ t: 0, s: e, k: s$1, v: r2 });
  }
  createAddAssignment(e, r2) {
    this.assignments.push({ t: 1, s: this.getRefParam(e), k: s$1, v: r2 });
  }
  createSetAssignment(e, r2, t) {
    this.assignments.push({ t: 2, s: this.getRefParam(e), k: r2, v: t });
  }
  createDeleteAssignment(e, r2) {
    this.assignments.push({ t: 3, s: this.getRefParam(e), k: r2, v: s$1 });
  }
  createArrayAssign(e, r2, t) {
    this.createAssignment(this.getRefParam(e) + "[" + r2 + "]", t);
  }
  createObjectAssign(e, r2, t) {
    this.createAssignment(this.getRefParam(e) + "." + r2, t);
  }
  isIndexedValueInStack(e) {
    return e.t === 4 && this.stack.includes(e.i);
  }
  serializeReference(e) {
    return this.assignIndexedValue(e.i, O + '.get("' + e.s + '")');
  }
  serializeArrayItem(e, r2, t) {
    return r2 ? this.isIndexedValueInStack(r2) ? (this.markRef(e), this.createArrayAssign(e, t, this.getRefParam(r2.i)), "") : this.serialize(r2) : "";
  }
  serializeArray(e) {
    let r2 = e.i;
    if (e.l) {
      this.stack.push(r2);
      let t = e.a, n = this.serializeArrayItem(r2, t[0], 0), a = n === "";
      for (let i2 = 1, l2 = e.l, c2; i2 < l2; i2++) c2 = this.serializeArrayItem(r2, t[i2], i2), n += "," + c2, a = c2 === "";
      return this.stack.pop(), this.pushObjectFlag(e.o, e.i), this.assignIndexedValue(r2, "[" + n + (a ? ",]" : "]"));
    }
    return this.assignIndexedValue(r2, "[]");
  }
  serializeProperty(e, r2, t) {
    if (typeof r2 == "string") {
      let n = Number(r2), a = n >= 0 && n.toString() === r2 || Le(r2);
      if (this.isIndexedValueInStack(t)) {
        let i2 = this.getRefParam(t.i);
        return this.markRef(e.i), a && n !== n ? this.createObjectAssign(e.i, r2, i2) : this.createArrayAssign(e.i, a ? r2 : '"' + r2 + '"', i2), "";
      }
      return (a ? r2 : '"' + r2 + '"') + ":" + this.serialize(t);
    }
    return "[" + this.serialize(r2) + "]:" + this.serialize(t);
  }
  serializeProperties(e, r2) {
    let t = r2.s;
    if (t) {
      let n = r2.k, a = r2.v;
      this.stack.push(e.i);
      let i2 = this.serializeProperty(e, n[0], a[0]);
      for (let l2 = 1, c2 = i2; l2 < t; l2++) c2 = this.serializeProperty(e, n[l2], a[l2]), i2 += (c2 && i2 && ",") + c2;
      return this.stack.pop(), "{" + i2 + "}";
    }
    return "{}";
  }
  serializeObject(e) {
    return this.pushObjectFlag(e.o, e.i), this.assignIndexedValue(e.i, this.serializeProperties(e, e.p));
  }
  serializeWithObjectAssign(e, r2, t) {
    let n = this.serializeProperties(e, r2);
    return n !== "{}" ? "Object.assign(" + t + "," + n + ")" : t;
  }
  serializeStringKeyAssignment(e, r2, t, n) {
    let a = this.serialize(n), i2 = Number(t), l2 = i2 >= 0 && i2.toString() === t || Le(t);
    if (this.isIndexedValueInStack(n)) l2 && i2 !== i2 ? this.createObjectAssign(e.i, t, a) : this.createArrayAssign(e.i, l2 ? t : '"' + t + '"', a);
    else {
      let c2 = this.assignments;
      this.assignments = r2, l2 && i2 !== i2 ? this.createObjectAssign(e.i, t, a) : this.createArrayAssign(e.i, l2 ? t : '"' + t + '"', a), this.assignments = c2;
    }
  }
  serializeAssignment(e, r2, t, n) {
    if (typeof t == "string") this.serializeStringKeyAssignment(e, r2, t, n);
    else {
      let a = this.stack;
      this.stack = [];
      let i2 = this.serialize(n);
      this.stack = a;
      let l2 = this.assignments;
      this.assignments = r2, this.createArrayAssign(e.i, this.serialize(t), i2), this.assignments = l2;
    }
  }
  serializeAssignments(e, r2) {
    let t = r2.s;
    if (t) {
      let n = [], a = r2.k, i2 = r2.v;
      this.stack.push(e.i);
      for (let l2 = 0; l2 < t; l2++) this.serializeAssignment(e, n, a[l2], i2[l2]);
      return this.stack.pop(), fr(n);
    }
    return s$1;
  }
  serializeDictionary(e, r2) {
    if (e.p) if (this.features & 8) r2 = this.serializeWithObjectAssign(e, e.p, r2);
    else {
      this.markRef(e.i);
      let t = this.serializeAssignments(e, e.p);
      if (t) return "(" + this.assignIndexedValue(e.i, r2) + "," + t + this.getRefParam(e.i) + ")";
    }
    return this.assignIndexedValue(e.i, r2);
  }
  serializeNullConstructor(e) {
    return this.pushObjectFlag(e.o, e.i), this.serializeDictionary(e, Vr);
  }
  serializeDate(e) {
    return this.assignIndexedValue(e.i, 'new Date("' + e.s + '")');
  }
  serializeRegExp(e) {
    return this.assignIndexedValue(e.i, "/" + e.c + "/" + e.m);
  }
  serializeSetItem(e, r2) {
    return this.isIndexedValueInStack(r2) ? (this.markRef(e), this.createAddAssignment(e, this.getRefParam(r2.i)), "") : this.serialize(r2);
  }
  serializeSet(e) {
    let r2 = Dr, t = e.l, n = e.i;
    if (t) {
      let a = e.a;
      this.stack.push(n);
      let i2 = this.serializeSetItem(n, a[0]);
      for (let l2 = 1, c2 = i2; l2 < t; l2++) c2 = this.serializeSetItem(n, a[l2]), i2 += (c2 && i2 && ",") + c2;
      this.stack.pop(), i2 && (r2 += "([" + i2 + "])");
    }
    return this.assignIndexedValue(n, r2);
  }
  serializeMapEntry(e, r2, t, n) {
    if (this.isIndexedValueInStack(r2)) {
      let a = this.getRefParam(r2.i);
      if (this.markRef(e), this.isIndexedValueInStack(t)) {
        let l2 = this.getRefParam(t.i);
        return this.createSetAssignment(e, a, l2), "";
      }
      if (t.t !== 4 && t.i != null && this.isMarked(t.i)) {
        let l2 = "(" + this.serialize(t) + ",[" + n + "," + n + "])";
        return this.createSetAssignment(e, a, this.getRefParam(t.i)), this.createDeleteAssignment(e, n), l2;
      }
      let i2 = this.stack;
      return this.stack = [], this.createSetAssignment(e, a, this.serialize(t)), this.stack = i2, "";
    }
    if (this.isIndexedValueInStack(t)) {
      let a = this.getRefParam(t.i);
      if (this.markRef(e), r2.t !== 4 && r2.i != null && this.isMarked(r2.i)) {
        let l2 = "(" + this.serialize(r2) + ",[" + n + "," + n + "])";
        return this.createSetAssignment(e, this.getRefParam(r2.i), a), this.createDeleteAssignment(e, n), l2;
      }
      let i2 = this.stack;
      return this.stack = [], this.createSetAssignment(e, this.serialize(r2), a), this.stack = i2, "";
    }
    return "[" + this.serialize(r2) + "," + this.serialize(t) + "]";
  }
  serializeMap(e) {
    let r2 = Br, t = e.e.s, n = e.i, a = e.f, i2 = this.getRefParam(a.i);
    if (t) {
      let l2 = e.e.k, c2 = e.e.v;
      this.stack.push(n);
      let p2 = this.serializeMapEntry(n, l2[0], c2[0], i2);
      for (let h2 = 1, X2 = p2; h2 < t; h2++) X2 = this.serializeMapEntry(n, l2[h2], c2[h2], i2), p2 += (X2 && p2 && ",") + X2;
      this.stack.pop(), p2 && (r2 += "([" + p2 + "])");
    }
    return a.t === 26 && (this.markRef(a.i), r2 = "(" + this.serialize(a) + "," + r2 + ")"), this.assignIndexedValue(n, r2);
  }
  serializeArrayBuffer(e) {
    let r2 = "new Uint8Array(", t = e.s, n = t.length;
    if (n) {
      r2 += "[" + t[0];
      for (let a = 1; a < n; a++) r2 += "," + t[a];
      r2 += "]";
    }
    return this.assignIndexedValue(e.i, r2 + ").buffer");
  }
  serializeTypedArray(e) {
    return this.assignIndexedValue(e.i, "new " + e.c + "(" + this.serialize(e.f) + "," + e.b + "," + e.l + ")");
  }
  serializeDataView(e) {
    return this.assignIndexedValue(e.i, "new DataView(" + this.serialize(e.f) + "," + e.b + "," + e.l + ")");
  }
  serializeAggregateError(e) {
    let r2 = e.i;
    this.stack.push(r2);
    let t = this.serializeDictionary(e, 'new AggregateError([],"' + e.m + '")');
    return this.stack.pop(), t;
  }
  serializeError(e) {
    return this.serializeDictionary(e, "new " + ue$1[e.s] + '("' + e.m + '")');
  }
  serializePromise(e) {
    let r2, t = e.f, n = e.i, a = e.s ? jr : _r;
    if (this.isIndexedValueInStack(t)) {
      let i2 = this.getRefParam(t.i);
      r2 = a + (e.s ? "().then(" + this.createFunction([], i2) + ")" : "().catch(" + this.createEffectfulFunction([], "throw " + i2) + ")");
    } else {
      this.stack.push(n);
      let i2 = this.serialize(t);
      this.stack.pop(), r2 = a + "(" + i2 + ")";
    }
    return this.assignIndexedValue(n, r2);
  }
  serializeWellKnownSymbol(e) {
    return this.assignIndexedValue(e.i, $e[e.s]);
  }
  serializeBoxed(e) {
    return this.assignIndexedValue(e.i, "Object(" + this.serialize(e.f) + ")");
  }
  serializePlugin(e) {
    let r2 = this.plugins;
    if (r2) for (let t = 0, n = r2.length; t < n; t++) {
      let a = r2[t];
      if (a.tag === e.c) return this.assignIndexedValue(e.i, a.serialize(e.s, this, { id: e.i }));
    }
    throw new W$1(e.c);
  }
  getConstructor(e) {
    let r2 = this.serialize(e);
    return r2 === this.getRefParam(e.i) ? r2 : "(" + r2 + ")";
  }
  serializePromiseConstructor(e) {
    let r2 = this.assignIndexedValue(e.s, "{p:0,s:0,f:0}");
    return this.assignIndexedValue(e.i, this.getConstructor(e.f) + "(" + r2 + ")");
  }
  serializePromiseResolve(e) {
    return this.getConstructor(e.a[0]) + "(" + this.getRefParam(e.i) + "," + this.serialize(e.a[1]) + ")";
  }
  serializePromiseReject(e) {
    return this.getConstructor(e.a[0]) + "(" + this.getRefParam(e.i) + "," + this.serialize(e.a[1]) + ")";
  }
  serializeSpecialReference(e) {
    return this.assignIndexedValue(e.i, cr(this.features, e.s));
  }
  serializeIteratorFactory(e) {
    let r2 = "", t = false;
    return e.f.t !== 4 && (this.markRef(e.f.i), r2 = "(" + this.serialize(e.f) + ",", t = true), r2 += this.assignIndexedValue(e.i, this.createFunction(["s"], this.createFunction(["i", "c", "d", "t"], "(i=0,t={[" + this.getRefParam(e.f.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction([], "if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}") + "})"))), t && (r2 += ")"), r2;
  }
  serializeIteratorFactoryInstance(e) {
    return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
  }
  serializeAsyncIteratorFactory(e) {
    let r2 = e.a[0], t = e.a[1], n = "";
    r2.t !== 4 && (this.markRef(r2.i), n += "(" + this.serialize(r2)), t.t !== 4 && (this.markRef(t.i), n += (n ? "," : "(") + this.serialize(t)), n && (n += ",");
    let a = this.assignIndexedValue(e.i, this.createFunction(["s"], this.createFunction(["b", "c", "p", "d", "e", "t", "f"], "(b=[],c=0,p=[],d=-1,e=!1,f=" + this.createEffectfulFunction(["i", "l"], "for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})") + ",s.on({next:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!1,value:v});b.push(v)") + ",throw:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)") + ",return:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)") + "}),t={[" + this.getRefParam(t.i) + "]:" + this.createFunction([], "t.p") + ",next:" + this.createEffectfulFunction(["i", "t", "v"], "if(d===-1){return((i=c++)>=b.length)?(" + this.getRefParam(r2.i) + "(t={p:0,s:0,f:0}),p.push(t),t.p):{done:!1,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}") + "})")));
    return n ? n + a + ")" : a;
  }
  serializeAsyncIteratorFactoryInstance(e) {
    return this.getConstructor(e.a[0]) + "(" + this.serialize(e.a[1]) + ")";
  }
  serializeStreamConstructor(e) {
    let r2 = this.assignIndexedValue(e.i, this.getConstructor(e.f) + "()"), t = e.a.length;
    if (t) {
      let n = this.serialize(e.a[0]);
      for (let a = 1; a < t; a++) n += "," + this.serialize(e.a[a]);
      return "(" + r2 + "," + n + "," + this.getRefParam(e.i) + ")";
    }
    return r2;
  }
  serializeStreamNext(e) {
    return this.getRefParam(e.i) + ".next(" + this.serialize(e.f) + ")";
  }
  serializeStreamThrow(e) {
    return this.getRefParam(e.i) + ".throw(" + this.serialize(e.f) + ")";
  }
  serializeStreamReturn(e) {
    return this.getRefParam(e.i) + ".return(" + this.serialize(e.f) + ")";
  }
  serialize(e) {
    try {
      switch (e.t) {
        case 2:
          return qe[e.s];
        case 0:
          return "" + e.s;
        case 1:
          return '"' + e.s + '"';
        case 3:
          return e.s + "n";
        case 4:
          return this.getRefParam(e.i);
        case 18:
          return this.serializeReference(e);
        case 9:
          return this.serializeArray(e);
        case 10:
          return this.serializeObject(e);
        case 11:
          return this.serializeNullConstructor(e);
        case 5:
          return this.serializeDate(e);
        case 6:
          return this.serializeRegExp(e);
        case 7:
          return this.serializeSet(e);
        case 8:
          return this.serializeMap(e);
        case 19:
          return this.serializeArrayBuffer(e);
        case 16:
        case 15:
          return this.serializeTypedArray(e);
        case 20:
          return this.serializeDataView(e);
        case 14:
          return this.serializeAggregateError(e);
        case 13:
          return this.serializeError(e);
        case 12:
          return this.serializePromise(e);
        case 17:
          return this.serializeWellKnownSymbol(e);
        case 21:
          return this.serializeBoxed(e);
        case 22:
          return this.serializePromiseConstructor(e);
        case 23:
          return this.serializePromiseResolve(e);
        case 24:
          return this.serializePromiseReject(e);
        case 25:
          return this.serializePlugin(e);
        case 26:
          return this.serializeSpecialReference(e);
        case 27:
          return this.serializeIteratorFactory(e);
        case 28:
          return this.serializeIteratorFactoryInstance(e);
        case 29:
          return this.serializeAsyncIteratorFactory(e);
        case 30:
          return this.serializeAsyncIteratorFactoryInstance(e);
        case 31:
          return this.serializeStreamConstructor(e);
        case 32:
          return this.serializeStreamNext(e);
        case 33:
          return this.serializeStreamThrow(e);
        case 34:
          return this.serializeStreamReturn(e);
        default:
          throw new y$1(e);
      }
    } catch (r2) {
      throw new Te(r2);
    }
  }
};
var D$1 = class D extends V {
  static {
    __name(this, "D");
  }
  constructor(r2) {
    super(r2);
    this.mode = "cross";
    this.scopeId = r2.scopeId;
  }
  getRefParam(r2) {
    return Q + "[" + r2 + "]";
  }
  assignIndexedValue(r2, t) {
    return this.getRefParam(r2) + "=" + t;
  }
  serializeTop(r2) {
    let t = this.serialize(r2), n = r2.i;
    if (n == null) return t;
    let a = this.resolvePatches(), i2 = this.getRefParam(n), l2 = this.scopeId == null ? "" : Q, c2 = a ? "(" + t + "," + a + i2 + ")" : t;
    if (l2 === "") return r2.t === 10 && !a ? "(" + c2 + ")" : c2;
    let p2 = this.scopeId == null ? "()" : "(" + Q + '["' + d(this.scopeId) + '"])';
    return "(" + this.createFunction([l2], c2) + ")" + p2;
  }
};
var v = class extends Y$1 {
  static {
    __name(this, "v");
  }
  parseItems(e) {
    let r2 = [];
    for (let t = 0, n = e.length; t < n; t++) t in e && (r2[t] = this.parse(e[t]));
    return r2;
  }
  parseArray(e, r2) {
    return Ne(e, r2, this.parseItems(r2));
  }
  parseProperties(e) {
    let r2 = Object.entries(e), t = [], n = [];
    for (let i2 = 0, l2 = r2.length; i2 < l2; i2++) t.push(d(r2[i2][0])), n.push(this.parse(r2[i2][1]));
    let a = Symbol.iterator;
    return a in e && (t.push(this.parseWellKnownSymbol(a)), n.push(M(this.parseIteratorFactory(), this.parse(J$1(e))))), a = Symbol.asyncIterator, a in e && (t.push(this.parseWellKnownSymbol(a)), n.push(U(this.parseAsyncIteratorFactory(), this.parse(K$1())))), a = Symbol.toStringTag, a in e && (t.push(this.parseWellKnownSymbol(a)), n.push(w$1(e[a]))), a = Symbol.isConcatSpreadable, a in e && (t.push(this.parseWellKnownSymbol(a)), n.push(e[a] ? I$1 : A$1)), { k: t, v: n, s: t.length };
  }
  parsePlainObject(e, r2, t) {
    return this.createObjectNode(e, r2, t, this.parseProperties(r2));
  }
  parseBoxed(e, r2) {
    return be(e, this.parse(r2.valueOf()));
  }
  parseTypedArray(e, r2) {
    return xe(e, r2, this.parse(r2.buffer));
  }
  parseBigIntTypedArray(e, r2) {
    return Ie(e, r2, this.parse(r2.buffer));
  }
  parseDataView(e, r2) {
    return Ae(e, r2, this.parse(r2.buffer));
  }
  parseError(e, r2) {
    let t = j$1(r2, this.features);
    return we(e, r2, t ? this.parseProperties(t) : s$1);
  }
  parseAggregateError(e, r2) {
    let t = j$1(r2, this.features);
    return Ee(e, r2, t ? this.parseProperties(t) : s$1);
  }
  parseMap(e, r2) {
    let t = [], n = [];
    for (let [a, i2] of r2.entries()) t.push(this.parse(a)), n.push(this.parse(i2));
    return this.createMapNode(e, t, n, r2.size);
  }
  parseSet(e, r2) {
    let t = [];
    for (let n of r2.keys()) t.push(this.parse(n));
    return Pe(e, r2.size, t);
  }
  parsePlugin(e, r2) {
    let t = this.plugins;
    if (t) for (let n = 0, a = t.length; n < a; n++) {
      let i2 = t[n];
      if (i2.parse.sync && i2.test(r2)) return _$1(e, i2.tag, i2.parse.sync(r2, this, { id: e }));
    }
  }
  parseStream(e, r2) {
    return L(e, this.parseSpecialReference(4), []);
  }
  parsePromise(e, r2) {
    return this.createPromiseConstructorNode(e, this.createIndex({}));
  }
  parseObject(e, r2) {
    if (Array.isArray(r2)) return this.parseArray(e, r2);
    if (Fe(r2)) return this.parseStream(e, r2);
    let t = r2.constructor;
    if (t === T$1) return this.parse(r2.replacement);
    let n = this.parsePlugin(e, r2);
    if (n) return n;
    switch (t) {
      case Object:
        return this.parsePlainObject(e, r2, false);
      case void 0:
        return this.parsePlainObject(e, r2, true);
      case Date:
        return he(e, r2);
      case RegExp:
        return ye(e, r2);
      case Error:
      case EvalError:
      case RangeError:
      case ReferenceError:
      case SyntaxError:
      case TypeError:
      case URIError:
        return this.parseError(e, r2);
      case Number:
      case Boolean:
      case String:
      case BigInt:
        return this.parseBoxed(e, r2);
      case ArrayBuffer:
        return ve(e, r2);
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case Uint8Array:
      case Uint16Array:
      case Uint32Array:
      case Uint8ClampedArray:
      case Float32Array:
      case Float64Array:
        return this.parseTypedArray(e, r2);
      case DataView:
        return this.parseDataView(e, r2);
      case Map:
        return this.parseMap(e, r2);
      case Set:
        return this.parseSet(e, r2);
    }
    if (t === Promise || r2 instanceof Promise) return this.parsePromise(e, r2);
    let a = this.features;
    if (a & 16) switch (t) {
      case BigInt64Array:
      case BigUint64Array:
        return this.parseBigIntTypedArray(e, r2);
    }
    if (a & 1 && typeof AggregateError != "undefined" && (t === AggregateError || r2 instanceof AggregateError)) return this.parseAggregateError(e, r2);
    if (r2 instanceof Error) return this.parseError(e, r2);
    if (Symbol.iterator in r2 || Symbol.asyncIterator in r2) return this.parsePlainObject(e, r2, !!t);
    throw new g$1(r2);
  }
  parseFunction(e) {
    let r2 = this.getReference(e);
    if (r2.type !== 0) return r2.value;
    let t = this.parsePlugin(r2.value, e);
    if (t) return t;
    throw new g$1(e);
  }
  parse(e) {
    switch (typeof e) {
      case "boolean":
        return e ? I$1 : A$1;
      case "undefined":
        return pe$1;
      case "string":
        return w$1(e);
      case "number":
        return ge(e);
      case "bigint":
        return Se(e);
      case "object": {
        if (e) {
          let r2 = this.getReference(e);
          return r2.type === 0 ? this.parseObject(r2.value, e) : r2.value;
        }
        return de;
      }
      case "symbol":
        return this.parseWellKnownSymbol(e);
      case "function":
        return this.parseFunction(e);
      default:
        throw new g$1(e);
    }
  }
  parseTop(e) {
    try {
      return this.parse(e);
    } catch (r2) {
      throw r2 instanceof E$1 ? r2 : new E$1(r2);
    }
  }
};
var oe = class extends v {
  static {
    __name(this, "oe");
  }
  constructor(r2) {
    super(r2);
    this.alive = true;
    this.pending = 0;
    this.initial = true;
    this.buffer = [];
    this.onParseCallback = r2.onParse, this.onErrorCallback = r2.onError, this.onDoneCallback = r2.onDone;
  }
  onParseInternal(r2, t) {
    try {
      this.onParseCallback(r2, t);
    } catch (n) {
      this.onError(n);
    }
  }
  flush() {
    for (let r2 = 0, t = this.buffer.length; r2 < t; r2++) this.onParseInternal(this.buffer[r2], false);
  }
  onParse(r2) {
    this.initial ? this.buffer.push(r2) : this.onParseInternal(r2, false);
  }
  onError(r2) {
    if (this.onErrorCallback) this.onErrorCallback(r2);
    else throw r2;
  }
  onDone() {
    this.onDoneCallback && this.onDoneCallback();
  }
  pushPendingState() {
    this.pending++;
  }
  popPendingState() {
    --this.pending <= 0 && this.onDone();
  }
  parseProperties(r2) {
    let t = Object.entries(r2), n = [], a = [];
    for (let l2 = 0, c2 = t.length; l2 < c2; l2++) n.push(d(t[l2][0])), a.push(this.parse(t[l2][1]));
    let i2 = Symbol.iterator;
    return i2 in r2 && (n.push(this.parseWellKnownSymbol(i2)), a.push(M(this.parseIteratorFactory(), this.parse(J$1(r2))))), i2 = Symbol.asyncIterator, i2 in r2 && (n.push(this.parseWellKnownSymbol(i2)), a.push(U(this.parseAsyncIteratorFactory(), this.parse(Ve(r2))))), i2 = Symbol.toStringTag, i2 in r2 && (n.push(this.parseWellKnownSymbol(i2)), a.push(w$1(r2[i2]))), i2 = Symbol.isConcatSpreadable, i2 in r2 && (n.push(this.parseWellKnownSymbol(i2)), a.push(r2[i2] ? I$1 : A$1)), { k: n, v: a, s: n.length };
  }
  handlePromiseSuccess(r2, t) {
    let n = this.parseWithError(t);
    n && this.onParse(u$1(23, r2, s$1, s$1, s$1, s$1, s$1, s$1, [this.parseSpecialReference(2), n], s$1, s$1, s$1)), this.popPendingState();
  }
  handlePromiseFailure(r2, t) {
    if (this.alive) {
      let n = this.parseWithError(t);
      n && this.onParse(u$1(24, r2, s$1, s$1, s$1, s$1, s$1, s$1, [this.parseSpecialReference(3), n], s$1, s$1, s$1));
    }
    this.popPendingState();
  }
  parsePromise(r2, t) {
    let n = this.createIndex({});
    return t.then(this.handlePromiseSuccess.bind(this, n), this.handlePromiseFailure.bind(this, n)), this.pushPendingState(), this.createPromiseConstructorNode(r2, n);
  }
  parsePlugin(r2, t) {
    let n = this.plugins;
    if (n) for (let a = 0, i2 = n.length; a < i2; a++) {
      let l2 = n[a];
      if (l2.parse.stream && l2.test(t)) return _$1(r2, l2.tag, l2.parse.stream(t, this, { id: r2 }));
    }
    return s$1;
  }
  parseStream(r2, t) {
    let n = L(r2, this.parseSpecialReference(4), []);
    return this.pushPendingState(), t.on({ next: /* @__PURE__ */ __name((a) => {
      if (this.alive) {
        let i2 = this.parseWithError(a);
        i2 && this.onParse(Re(r2, i2));
      }
    }, "next"), throw: /* @__PURE__ */ __name((a) => {
      if (this.alive) {
        let i2 = this.parseWithError(a);
        i2 && this.onParse(Oe(r2, i2));
      }
      this.popPendingState();
    }, "throw"), return: /* @__PURE__ */ __name((a) => {
      if (this.alive) {
        let i2 = this.parseWithError(a);
        i2 && this.onParse(Ce(r2, i2));
      }
      this.popPendingState();
    }, "return") }), n;
  }
  parseWithError(r2) {
    try {
      return this.parse(r2);
    } catch (t) {
      return this.onError(t), s$1;
    }
  }
  start(r2) {
    let t = this.parseWithError(r2);
    t && (this.onParseInternal(t, true), this.initial = false, this.flush(), this.pending <= 0 && this.destroy());
  }
  destroy() {
    this.alive && (this.onDone(), this.alive = false);
  }
  isAlive() {
    return this.alive;
  }
};
var G$1 = class G extends oe {
  static {
    __name(this, "G");
  }
  constructor() {
    super(...arguments);
    this.mode = "cross";
  }
};
function gr(o2, e) {
  let r2 = m$1(e.plugins), t = new G$1({ plugins: r2, refs: e.refs, disabledFeatures: e.disabledFeatures, onParse(n, a) {
    let i2 = new D$1({ plugins: r2, features: t.features, scopeId: e.scopeId, markedRefs: t.marked }), l2;
    try {
      l2 = i2.serializeTop(n);
    } catch (c2) {
      e.onError && e.onError(c2);
      return;
    }
    e.onSerialize(l2, a);
  }, onError: e.onError, onDone: e.onDone });
  return t.start(o2), t.destroy.bind(t);
}
__name(gr, "gr");
var De = class {
  static {
    __name(this, "De");
  }
  constructor(e) {
    this.options = e;
    this.alive = true;
    this.flushed = false;
    this.done = false;
    this.pending = 0;
    this.cleanups = [];
    this.refs = /* @__PURE__ */ new Map();
    this.keys = /* @__PURE__ */ new Set();
    this.ids = 0;
    this.plugins = m$1(e.plugins);
  }
  write(e, r2) {
    this.alive && !this.flushed && (this.pending++, this.keys.add(e), this.cleanups.push(gr(r2, { plugins: this.plugins, scopeId: this.options.scopeId, refs: this.refs, disabledFeatures: this.options.disabledFeatures, onError: this.options.onError, onSerialize: /* @__PURE__ */ __name((t, n) => {
      this.alive && this.options.onData(n ? this.options.globalIdentifier + '["' + d(e) + '"]=' + t : t);
    }, "onSerialize"), onDone: /* @__PURE__ */ __name(() => {
      this.alive && (this.pending--, this.pending <= 0 && this.flushed && !this.done && this.options.onDone && (this.options.onDone(), this.done = true));
    }, "onDone") })));
  }
  getNextID() {
    for (; this.keys.has("" + this.ids); ) this.ids++;
    return "" + this.ids;
  }
  push(e) {
    let r2 = this.getNextID();
    return this.write(r2, e), r2;
  }
  flush() {
    this.alive && (this.flushed = true, this.pending <= 0 && !this.done && this.options.onDone && (this.options.onDone(), this.done = true));
  }
  close() {
    if (this.alive) {
      for (let e = 0, r2 = this.cleanups.length; e < r2; e++) this.cleanups[e]();
      !this.done && this.options.onDone && (this.options.onDone(), this.done = true), this.alive = false;
    }
  }
};
function h(e) {
  e(this.reason);
}
__name(h, "h");
function A(e) {
  this.addEventListener("abort", h.bind(this, e), { once: true });
}
__name(A, "A");
function E2(e) {
  return new Promise(A.bind(e));
}
__name(E2, "E");
var o = class {
  static {
    __name(this, "o");
  }
  constructor() {
    this.controller = new AbortController();
  }
};
var F = Hr({ tag: "seroval-plugins/web/AbortSignalController", test(e) {
  return e instanceof o;
}, parse: { stream() {
} }, serialize(e) {
  return "new AbortController";
}, deserialize(e) {
  return new o();
} });
var s = class {
  static {
    __name(this, "s");
  }
  constructor(r2, a) {
    this.controller = r2;
    this.reason = a;
  }
};
var D2 = Hr({ extends: [F], tag: "seroval-plugins/web/AbortSignalAbort", test(e) {
  return e instanceof s;
}, parse: { stream(e, r2) {
  return { controller: r2.parse(e.controller), reason: r2.parse(e.reason) };
} }, serialize(e, r2) {
  return r2.serialize(e.controller) + ".abort(" + r2.serialize(e.reason) + ")";
}, deserialize(e, r2) {
  let a = r2.deserialize(e.controller), t = r2.deserialize(e.reason);
  return a.controller.abort(t), new s(a, t);
} });
var I = Hr({ tag: "seroval-plugins/web/AbortSignal", extends: [D2], test(e) {
  return typeof AbortSignal == "undefined" ? false : e instanceof AbortSignal;
}, parse: { sync(e, r2) {
  return e.aborted ? { type: 1, reason: r2.parse(e.reason) } : { type: 0 };
}, async async(e, r2) {
  if (e.aborted) return { type: 1, reason: await r2.parse(e.reason) };
  let a = await E2(e);
  return { type: 1, reason: await r2.parse(a) };
}, stream(e, r2) {
  if (e.aborted) return { type: 1, reason: r2.parse(e.reason) };
  let a = new o();
  return r2.pushPendingState(), e.addEventListener("abort", () => {
    let t = r2.parseWithError(new s(a, e.reason));
    t && r2.onParse(t), r2.popPendingState();
  }, { once: true }), { type: 2, controller: r2.parse(a) };
} }, serialize(e, r2) {
  return e.type === 0 ? "(new AbortController).signal" : e.type === 1 ? "AbortSignal.abort(" + r2.serialize(e.reason) + ")" : "(" + r2.serialize(e.controller) + ").signal";
}, deserialize(e, r2) {
  return e.type === 0 ? new AbortController().signal : e.type === 1 ? AbortSignal.abort(r2.deserialize(e.reason)) : r2.deserialize(e.controller).controller.signal;
} });
var C = I;
function f(e) {
  return { detail: e.detail, bubbles: e.bubbles, cancelable: e.cancelable, composed: e.composed };
}
__name(f, "f");
var q = Hr({ tag: "seroval-plugins/web/CustomEvent", test(e) {
  return typeof CustomEvent == "undefined" ? false : e instanceof CustomEvent;
}, parse: { sync(e, r2) {
  return { type: r2.parse(e.type), options: r2.parse(f(e)) };
}, async async(e, r2) {
  return { type: await r2.parse(e.type), options: await r2.parse(f(e)) };
}, stream(e, r2) {
  return { type: r2.parse(e.type), options: r2.parse(f(e)) };
} }, serialize(e, r2) {
  return "new CustomEvent(" + r2.serialize(e.type) + "," + r2.serialize(e.options) + ")";
}, deserialize(e, r2) {
  return new CustomEvent(r2.deserialize(e.type), r2.deserialize(e.options));
} });
var H = q;
var T2 = Hr({ tag: "seroval-plugins/web/DOMException", test(e) {
  return typeof DOMException == "undefined" ? false : e instanceof DOMException;
}, parse: { sync(e, r2) {
  return { name: r2.parse(e.name), message: r2.parse(e.message) };
}, async async(e, r2) {
  return { name: await r2.parse(e.name), message: await r2.parse(e.message) };
}, stream(e, r2) {
  return { name: r2.parse(e.name), message: r2.parse(e.message) };
} }, serialize(e, r2) {
  return "new DOMException(" + r2.serialize(e.message) + "," + r2.serialize(e.name) + ")";
}, deserialize(e, r2) {
  return new DOMException(r2.deserialize(e.message), r2.deserialize(e.name));
} });
var _ = T2;
function m(e) {
  return { bubbles: e.bubbles, cancelable: e.cancelable, composed: e.composed };
}
__name(m, "m");
var j = Hr({ tag: "seroval-plugins/web/Event", test(e) {
  return typeof Event == "undefined" ? false : e instanceof Event;
}, parse: { sync(e, r2) {
  return { type: r2.parse(e.type), options: r2.parse(m(e)) };
}, async async(e, r2) {
  return { type: await r2.parse(e.type), options: await r2.parse(m(e)) };
}, stream(e, r2) {
  return { type: r2.parse(e.type), options: r2.parse(m(e)) };
} }, serialize(e, r2) {
  return "new Event(" + r2.serialize(e.type) + "," + r2.serialize(e.options) + ")";
}, deserialize(e, r2) {
  return new Event(r2.deserialize(e.type), r2.deserialize(e.options));
} });
var Y2 = j;
var W2 = Hr({ tag: "seroval-plugins/web/File", test(e) {
  return typeof File == "undefined" ? false : e instanceof File;
}, parse: { async async(e, r2) {
  return { name: await r2.parse(e.name), options: await r2.parse({ type: e.type, lastModified: e.lastModified }), buffer: await r2.parse(await e.arrayBuffer()) };
} }, serialize(e, r2) {
  return "new File([" + r2.serialize(e.buffer) + "]," + r2.serialize(e.name) + "," + r2.serialize(e.options) + ")";
}, deserialize(e, r2) {
  return new File([r2.deserialize(e.buffer)], r2.deserialize(e.name), r2.deserialize(e.options));
} });
var c = W2;
function g2(e) {
  let r2 = [];
  return e.forEach((a, t) => {
    r2.push([t, a]);
  }), r2;
}
__name(g2, "g");
var i = {};
var G2 = Hr({ tag: "seroval-plugins/web/FormDataFactory", test(e) {
  return e === i;
}, parse: { sync() {
}, async async() {
  return await Promise.resolve(void 0);
}, stream() {
} }, serialize(e, r2) {
  return r2.createEffectfulFunction(["e", "f", "i", "s", "t"], "f=new FormData;for(i=0,s=e.length;i<s;i++)f.append((t=e[i])[0],t[1]);return f");
}, deserialize() {
  return i;
} });
var J = Hr({ tag: "seroval-plugins/web/FormData", extends: [c, G2], test(e) {
  return typeof FormData == "undefined" ? false : e instanceof FormData;
}, parse: { sync(e, r2) {
  return { factory: r2.parse(i), entries: r2.parse(g2(e)) };
}, async async(e, r2) {
  return { factory: await r2.parse(i), entries: await r2.parse(g2(e)) };
}, stream(e, r2) {
  return { factory: r2.parse(i), entries: r2.parse(g2(e)) };
} }, serialize(e, r2) {
  return "(" + r2.serialize(e.factory) + ")(" + r2.serialize(e.entries) + ")";
}, deserialize(e, r2) {
  let a = new FormData(), t = r2.deserialize(e.entries);
  for (let n = 0, R2 = t.length; n < R2; n++) {
    let b = t[n];
    a.append(b[0], b[1]);
  }
  return a;
} });
var K = J;
function y2(e) {
  let r2 = [];
  return e.forEach((a, t) => {
    r2.push([t, a]);
  }), r2;
}
__name(y2, "y");
var X = Hr({ tag: "seroval-plugins/web/Headers", test(e) {
  return typeof Headers == "undefined" ? false : e instanceof Headers;
}, parse: { sync(e, r2) {
  return r2.parse(y2(e));
}, async async(e, r2) {
  return await r2.parse(y2(e));
}, stream(e, r2) {
  return r2.parse(y2(e));
} }, serialize(e, r2) {
  return "new Headers(" + r2.serialize(e) + ")";
}, deserialize(e, r2) {
  return new Headers(r2.deserialize(e));
} });
var l = X;
var p = {};
var ee2 = Hr({ tag: "seroval-plugins/web/ReadableStreamFactory", test(e) {
  return e === p;
}, parse: { sync() {
}, async async() {
  return await Promise.resolve(void 0);
}, stream() {
} }, serialize(e, r2) {
  return r2.createFunction(["d"], "new ReadableStream({start:" + r2.createEffectfulFunction(["c"], "d.on({next:" + r2.createEffectfulFunction(["v"], "c.enqueue(v)") + ",throw:" + r2.createEffectfulFunction(["v"], "c.error(v)") + ",return:" + r2.createEffectfulFunction([], "c.close()") + "})") + "})");
}, deserialize() {
  return p;
} });
function w(e) {
  let r2 = K$1(), a = e.getReader();
  async function t() {
    try {
      let n = await a.read();
      n.done ? r2.return(n.value) : (r2.next(n.value), await t());
    } catch (n) {
      r2.throw(n);
    }
  }
  __name(t, "t");
  return t().catch(() => {
  }), r2;
}
__name(w, "w");
var re = Hr({ tag: "seroval/plugins/web/ReadableStream", extends: [ee2], test(e) {
  return typeof ReadableStream == "undefined" ? false : e instanceof ReadableStream;
}, parse: { sync(e, r2) {
  return { factory: r2.parse(p), stream: r2.parse(K$1()) };
}, async async(e, r2) {
  return { factory: await r2.parse(p), stream: await r2.parse(w(e)) };
}, stream(e, r2) {
  return { factory: r2.parse(p), stream: r2.parse(w(e)) };
} }, serialize(e, r2) {
  return "(" + r2.serialize(e.factory) + ")(" + r2.serialize(e.stream) + ")";
}, deserialize(e, r2) {
  let a = r2.deserialize(e.stream);
  return new ReadableStream({ start(t) {
    a.on({ next(n) {
      t.enqueue(n);
    }, throw(n) {
      t.error(n);
    }, return() {
      t.close();
    } });
  } });
} });
var u = re;
function P(e, r2) {
  return { body: r2, cache: e.cache, credentials: e.credentials, headers: e.headers, integrity: e.integrity, keepalive: e.keepalive, method: e.method, mode: e.mode, redirect: e.redirect, referrer: e.referrer, referrerPolicy: e.referrerPolicy };
}
__name(P, "P");
var te = Hr({ tag: "seroval-plugins/web/Request", extends: [u, l], test(e) {
  return typeof Request == "undefined" ? false : e instanceof Request;
}, parse: { async async(e, r2) {
  return { url: await r2.parse(e.url), options: await r2.parse(P(e, e.body ? await e.clone().arrayBuffer() : null)) };
}, stream(e, r2) {
  return { url: r2.parse(e.url), options: r2.parse(P(e, e.clone().body)) };
} }, serialize(e, r2) {
  return "new Request(" + r2.serialize(e.url) + "," + r2.serialize(e.options) + ")";
}, deserialize(e, r2) {
  return new Request(r2.deserialize(e.url), r2.deserialize(e.options));
} });
var ne = te;
function N(e) {
  return { headers: e.headers, status: e.status, statusText: e.statusText };
}
__name(N, "N");
var se = Hr({ tag: "seroval-plugins/web/Response", extends: [u, l], test(e) {
  return typeof Response == "undefined" ? false : e instanceof Response;
}, parse: { async async(e, r2) {
  return { body: await r2.parse(e.body ? await e.clone().arrayBuffer() : null), options: await r2.parse(N(e)) };
}, stream(e, r2) {
  return { body: r2.parse(e.clone().body), options: r2.parse(N(e)) };
} }, serialize(e, r2) {
  return "new Response(" + r2.serialize(e.body) + "," + r2.serialize(e.options) + ")";
}, deserialize(e, r2) {
  return new Response(r2.deserialize(e.body), r2.deserialize(e.options));
} });
var ie2 = se;
var pe = Hr({ tag: "seroval-plugins/web/URL", test(e) {
  return typeof URL == "undefined" ? false : e instanceof URL;
}, parse: { sync(e, r2) {
  return r2.parse(e.href);
}, async async(e, r2) {
  return await r2.parse(e.href);
}, stream(e, r2) {
  return r2.parse(e.href);
} }, serialize(e, r2) {
  return "new URL(" + r2.serialize(e) + ")";
}, deserialize(e, r2) {
  return new URL(r2.deserialize(e));
} });
var ue = pe;
var fe = Hr({ tag: "seroval-plugins/web/URLSearchParams", test(e) {
  return typeof URLSearchParams == "undefined" ? false : e instanceof URLSearchParams;
}, parse: { sync(e, r2) {
  return r2.parse(e.toString());
}, async async(e, r2) {
  return await r2.parse(e.toString());
}, stream(e, r2) {
  return r2.parse(e.toString());
} }, serialize(e, r2) {
  return "new URLSearchParams(" + r2.serialize(e) + ")";
}, deserialize(e, r2) {
  return new URLSearchParams(r2.deserialize(e));
} });
var me = fe;
var ES2017FLAG = R.AggregateError | R.BigIntTypedArray;
var GLOBAL_IDENTIFIER = "_$HY.r";
function createSerializer({
  onData,
  onDone,
  scopeId,
  onError
}) {
  return new De({
    scopeId,
    plugins: [
      C,
      H,
      _,
      Y2,
      K,
      l,
      u,
      ne,
      ie2,
      me,
      ue
    ],
    globalIdentifier: GLOBAL_IDENTIFIER,
    disabledFeatures: ES2017FLAG,
    onData,
    onDone,
    onError
  });
}
__name(createSerializer, "createSerializer");
function getLocalHeaderScript(id) {
  return xr(id) + ";";
}
__name(getLocalHeaderScript, "getLocalHeaderScript");
var REPLACE_SCRIPT = `function $df(e,n,o,t){if(n=document.getElementById(e),o=document.getElementById("pl-"+e)){for(;o&&8!==o.nodeType&&o.nodeValue!=="pl-"+e;)t=o.nextSibling,o.remove(),o=t;_$HY.done?o.remove():o.replaceWith(n.content)}n.remove(),_$HY.fe(e)}`;
function renderToString(code, options = {}) {
  const {
    renderId
  } = options;
  let scripts = "";
  const serializer = createSerializer({
    scopeId: renderId,
    onData(script) {
      if (!scripts) {
        scripts = getLocalHeaderScript(renderId);
      }
      scripts += script + ";";
    },
    onError: options.onError
  });
  sharedConfig.context = {
    id: renderId || "",
    count: 0,
    suspense: {},
    lazy: {},
    assets: [],
    nonce: options.nonce,
    serialize(id, p2) {
      !sharedConfig.context.noHydrate && serializer.write(id, p2);
    },
    roots: 0,
    nextRoot() {
      return this.renderId + "i-" + this.roots++;
    }
  };
  let html = createRoot((d2) => {
    setTimeout(d2);
    return resolveSSRNode(escape(code()));
  });
  sharedConfig.context.noHydrate = true;
  serializer.close();
  html = injectAssets(sharedConfig.context.assets, html);
  if (scripts.length) html = injectScripts(html, scripts, options.nonce);
  return html;
}
__name(renderToString, "renderToString");
function renderToStringAsync(code, options = {}) {
  const {
    timeoutMs = 3e4
  } = options;
  let timeoutHandle;
  const timeout = new Promise((_2, reject) => {
    timeoutHandle = setTimeout(() => reject("renderToString timed out"), timeoutMs);
  });
  return Promise.race([renderToStream(code, options), timeout]).then((html) => {
    clearTimeout(timeoutHandle);
    return html;
  });
}
__name(renderToStringAsync, "renderToStringAsync");
function renderToStream(code, options = {}) {
  let {
    nonce,
    onCompleteShell,
    onCompleteAll,
    renderId,
    noScripts
  } = options;
  let dispose2;
  const blockingPromises = [];
  const pushTask = /* @__PURE__ */ __name((task) => {
    if (noScripts) return;
    if (!tasks && !firstFlushed) {
      tasks = getLocalHeaderScript(renderId);
    }
    tasks += task + ";";
    if (!timer && firstFlushed) {
      timer = setTimeout(writeTasks);
    }
  }, "pushTask");
  const onDone = /* @__PURE__ */ __name(() => {
    writeTasks();
    doShell();
    onCompleteAll && onCompleteAll({
      write(v2) {
        !completed && buffer.write(v2);
      }
    });
    writable && writable.end();
    completed = true;
    if (firstFlushed) dispose2();
  }, "onDone");
  const serializer = createSerializer({
    scopeId: options.renderId,
    onData: pushTask,
    onDone,
    onError: options.onError
  });
  const flushEnd = /* @__PURE__ */ __name(() => {
    if (!registry.size) {
      queue(() => queue(() => serializer.flush()));
    }
  }, "flushEnd");
  const registry = /* @__PURE__ */ new Map();
  const writeTasks = /* @__PURE__ */ __name(() => {
    if (tasks.length && !completed && firstFlushed) {
      buffer.write(`<script${nonce ? ` nonce="${nonce}"` : ""}>${tasks}<\/script>`);
      tasks = "";
    }
    timer && clearTimeout(timer);
    timer = null;
  }, "writeTasks");
  let context3;
  let writable;
  let tmp = "";
  let tasks = "";
  let firstFlushed = false;
  let completed = false;
  let shellCompleted = false;
  let scriptFlushed = false;
  let timer = null;
  let buffer = {
    write(payload) {
      tmp += payload;
    }
  };
  sharedConfig.context = context3 = {
    id: renderId || "",
    count: 0,
    async: true,
    resources: {},
    lazy: {},
    suspense: {},
    assets: [],
    nonce,
    block(p2) {
      if (!firstFlushed) blockingPromises.push(p2);
    },
    replace(id, payloadFn) {
      if (firstFlushed) return;
      const placeholder = `<!--!$${id}-->`;
      const first = html.indexOf(placeholder);
      if (first === -1) return;
      const last = html.indexOf(`<!--!$/${id}-->`, first + placeholder.length);
      html = html.slice(0, first) + resolveSSRNode(escape(payloadFn())) + html.slice(last + placeholder.length + 1);
    },
    serialize(id, p2, wait) {
      const serverOnly = sharedConfig.context.noHydrate;
      if (!firstFlushed && wait && typeof p2 === "object" && "then" in p2) {
        blockingPromises.push(p2);
        !serverOnly && p2.then((d2) => {
          serializer.write(id, d2);
        }).catch((e) => {
          serializer.write(id, e);
        });
      } else if (!serverOnly) serializer.write(id, p2);
    },
    roots: 0,
    nextRoot() {
      return this.renderId + "i-" + this.roots++;
    },
    registerFragment(key) {
      if (!registry.has(key)) {
        let resolve, reject;
        const p2 = new Promise((r2, rej) => (resolve = r2, reject = rej));
        registry.set(key, (err) => queue(() => queue(() => {
          err ? reject(err) : resolve(true);
          queue(flushEnd);
        })));
        serializer.write(key, p2);
      }
      return (value, error5) => {
        if (registry.has(key)) {
          const resolve = registry.get(key);
          registry.delete(key);
          if (waitForFragments(registry, key)) {
            resolve();
            return;
          }
          if (!completed) {
            if (!firstFlushed) {
              queue(() => html = replacePlaceholder(html, key, value !== void 0 ? value : ""));
              resolve(error5);
            } else {
              buffer.write(`<template id="${key}">${value !== void 0 ? value : " "}</template>`);
              pushTask(`$df("${key}")${!scriptFlushed ? ";" + REPLACE_SCRIPT : ""}`);
              resolve(error5);
              scriptFlushed = true;
            }
          }
        }
        return firstFlushed;
      };
    }
  };
  let html = createRoot((d2) => {
    dispose2 = d2;
    return resolveSSRNode(escape(code()));
  });
  function doShell() {
    if (shellCompleted) return;
    sharedConfig.context = context3;
    context3.noHydrate = true;
    html = injectAssets(context3.assets, html);
    if (tasks.length) html = injectScripts(html, tasks, nonce);
    buffer.write(html);
    tasks = "";
    onCompleteShell && onCompleteShell({
      write(v2) {
        !completed && buffer.write(v2);
      }
    });
    shellCompleted = true;
  }
  __name(doShell, "doShell");
  return {
    then(fn) {
      function complete() {
        dispose2();
        fn(tmp);
      }
      __name(complete, "complete");
      if (onCompleteAll) {
        let ogComplete = onCompleteAll;
        onCompleteAll = /* @__PURE__ */ __name((options2) => {
          ogComplete(options2);
          complete();
        }, "onCompleteAll");
      } else onCompleteAll = complete;
      queue(flushEnd);
    },
    pipe(w2) {
      allSettled(blockingPromises).then(() => {
        setTimeout(() => {
          doShell();
          buffer = writable = w2;
          buffer.write(tmp);
          firstFlushed = true;
          if (completed) {
            dispose2();
            writable.end();
          } else flushEnd();
        });
      });
    },
    pipeTo(w2) {
      return allSettled(blockingPromises).then(() => {
        let resolve;
        const p2 = new Promise((r2) => resolve = r2);
        setTimeout(() => {
          doShell();
          const encoder2 = new TextEncoder();
          const writer = w2.getWriter();
          writable = {
            end() {
              writer.releaseLock();
              w2.close();
              resolve();
            }
          };
          buffer = {
            write(payload) {
              writer.write(encoder2.encode(payload));
            }
          };
          buffer.write(tmp);
          firstFlushed = true;
          if (completed) {
            dispose2();
            writable.end();
          } else flushEnd();
        });
        return p2;
      });
    }
  };
}
__name(renderToStream, "renderToStream");
function ssr(t, ...nodes) {
  if (nodes.length) {
    let result = "";
    for (let i2 = 0; i2 < nodes.length; i2++) {
      result += t[i2];
      const node = nodes[i2];
      if (node !== void 0) result += resolveSSRNode(node);
    }
    t = result + t[nodes.length];
  }
  return {
    t
  };
}
__name(ssr, "ssr");
function escape(s2, attr) {
  const t = typeof s2;
  if (t !== "string") {
    if (t === "function") return escape(s2());
    if (Array.isArray(s2)) {
      for (let i2 = 0; i2 < s2.length; i2++) s2[i2] = escape(s2[i2]);
      return s2;
    }
    return s2;
  }
  const delim = "<";
  const escDelim = "&lt;";
  let iDelim = s2.indexOf(delim);
  let iAmp = s2.indexOf("&");
  if (iDelim < 0 && iAmp < 0) return s2;
  let left = 0, out = "";
  while (iDelim >= 0 && iAmp >= 0) {
    if (iDelim < iAmp) {
      if (left < iDelim) out += s2.substring(left, iDelim);
      out += escDelim;
      left = iDelim + 1;
      iDelim = s2.indexOf(delim, left);
    } else {
      if (left < iAmp) out += s2.substring(left, iAmp);
      out += "&amp;";
      left = iAmp + 1;
      iAmp = s2.indexOf("&", left);
    }
  }
  if (iDelim >= 0) {
    do {
      if (left < iDelim) out += s2.substring(left, iDelim);
      out += escDelim;
      left = iDelim + 1;
      iDelim = s2.indexOf(delim, left);
    } while (iDelim >= 0);
  } else while (iAmp >= 0) {
    if (left < iAmp) out += s2.substring(left, iAmp);
    out += "&amp;";
    left = iAmp + 1;
    iAmp = s2.indexOf("&", left);
  }
  return left < s2.length ? out + s2.substring(left) : out;
}
__name(escape, "escape");
function resolveSSRNode(node, top) {
  const t = typeof node;
  if (t === "string") return node;
  if (node == null || t === "boolean") return "";
  if (Array.isArray(node)) {
    let prev = {};
    let mapped = "";
    for (let i2 = 0, len = node.length; i2 < len; i2++) {
      if (typeof prev !== "object" && typeof node[i2] !== "object") mapped += `<!--!$-->`;
      mapped += resolveSSRNode(prev = node[i2]);
    }
    return mapped;
  }
  if (t === "object") return node.t;
  if (t === "function") return resolveSSRNode(node());
  return String(node);
}
__name(resolveSSRNode, "resolveSSRNode");
function generateHydrationScript({
  eventNames: eventNames3 = ["click", "input"],
  nonce
} = {}) {
  return `<script${nonce ? ` nonce="${nonce}"` : ""}>window._$HY||(e=>{let t=e=>e&&e.hasAttribute&&(e.hasAttribute("data-hk")?e:t(e.host&&e.host.nodeType?e.host:e.parentNode));["${eventNames3.join('", "')}"].forEach((o=>document.addEventListener(o,(o=>{if(!e.events)return;let s=t(o.composedPath&&o.composedPath()[0]||o.target);s&&!e.completed.has(s)&&e.events.push([s,o])}))))})(_$HY={events:[],completed:new WeakSet,r:{},fe(){}});<\/script><!--xs-->`;
}
__name(generateHydrationScript, "generateHydrationScript");
function NoHydration(props) {
  if (sharedConfig.context) sharedConfig.context.noHydrate = true;
  return props.children;
}
__name(NoHydration, "NoHydration");
function queue(fn) {
  return Promise.resolve().then(fn);
}
__name(queue, "queue");
function allSettled(promises) {
  let length = promises.length;
  return Promise.allSettled(promises).then(() => {
    if (promises.length !== length) return allSettled(promises);
    return;
  });
}
__name(allSettled, "allSettled");
function injectAssets(assets, html) {
  if (!assets || !assets.length) return html;
  let out = "";
  for (let i2 = 0, len = assets.length; i2 < len; i2++) out += assets[i2]();
  const index = html.indexOf("</head>");
  if (index === -1) return html;
  return html.slice(0, index) + out + html.slice(index);
}
__name(injectAssets, "injectAssets");
function injectScripts(html, scripts, nonce) {
  const tag = `<script${nonce ? ` nonce="${nonce}"` : ""}>${scripts}<\/script>`;
  const index = html.indexOf("<!--xs-->");
  if (index > -1) {
    return html.slice(0, index) + tag + html.slice(index);
  }
  return html + tag;
}
__name(injectScripts, "injectScripts");
function waitForFragments(registry, key) {
  for (const k of [...registry.keys()].reverse()) {
    if (key.startsWith(k)) return true;
  }
  return false;
}
__name(waitForFragments, "waitForFragments");
function replacePlaceholder(html, key, value) {
  const marker = `<template id="pl-${key}">`;
  const close = `<!--pl-${key}-->`;
  const first = html.indexOf(marker);
  if (first === -1) return html;
  const last = html.indexOf(close, first + marker.length);
  return html.slice(0, first) + value + html.slice(last + close.length);
}
__name(replacePlaceholder, "replacePlaceholder");
var contexts = /* @__PURE__ */ new WeakMap();
function getContext(result) {
  if (contexts.has(result)) {
    return contexts.get(result);
  }
  let ctx = {
    c: 0,
    get id() {
      return "s" + this.c.toString();
    }
  };
  contexts.set(result, ctx);
  return ctx;
}
__name(getContext, "getContext");
function incrementId(ctx) {
  let id = ctx.id;
  ctx.c++;
  return id;
}
__name(incrementId, "incrementId");
var slotName = /* @__PURE__ */ __name((str) => str.trim().replace(/[-_]([a-z])/g, (_2, w2) => w2.toUpperCase()), "slotName");
async function check(Component, props, children2) {
  if (typeof Component !== "function") return false;
  if (Component.name === "QwikComponent") return false;
  if (Component.toString().includes("$$payload")) return false;
  let html;
  try {
    const result = await renderToStaticMarkup.call(this, Component, props, children2, {
      // The purpose of check() is just to validate that this is a Solid component and not
      // React, etc. We should render in sync mode which should skip Suspense boundaries
      // or loading resources like external API calls.
      renderStrategy: "sync"
    });
    html = result.html;
  } catch {
  }
  return typeof html === "string";
}
__name(check, "check");
async function renderToStaticMarkup(Component, props, { default: children2, ...slotted }, metadata) {
  const ctx = getContext(this.result);
  const renderId = metadata?.hydrate ? incrementId(ctx) : "";
  const needsHydrate = metadata?.astroStaticSlot ? !!metadata.hydrate : true;
  const tagName = needsHydrate ? "astro-slot" : "astro-static-slot";
  const renderStrategy = metadata?.renderStrategy ?? "async";
  const renderFn = /* @__PURE__ */ __name(() => {
    const slots = {};
    for (const [key, value] of Object.entries(slotted)) {
      const name = slotName(key);
      slots[name] = ssr(`<${tagName} name="${name}">${value}</${tagName}>`);
    }
    const newProps = {
      ...props,
      ...slots,
      // In Solid SSR mode, `ssr` creates the expected structure for `children`.
      children: children2 != null ? ssr(`<${tagName}>${children2}</${tagName}>`) : children2
    };
    if (renderStrategy === "sync") {
      return createComponent(Component, newProps);
    } else {
      if (needsHydrate) {
        return createComponent(Suspense, {
          get children() {
            return createComponent(Component, newProps);
          }
        });
      } else {
        return createComponent(NoHydration, {
          get children() {
            return createComponent(Suspense, {
              get children() {
                return createComponent(Component, newProps);
              }
            });
          }
        });
      }
    }
  }, "renderFn");
  const componentHtml = renderStrategy === "async" ? await renderToStringAsync(renderFn, {
    renderId,
    // New setting since Solid 1.8.4 that fixes an errant hydration event appearing in
    // server only components. Not available in TypeScript types yet.
    // https://github.com/solidjs/solid/issues/1931
    // https://github.com/ryansolid/dom-expressions/commit/e09e255ac725fd59195aa0f3918065d4bd974e6b
    ...{ noScripts: !needsHydrate }
  }) : renderToString(renderFn, { renderId });
  return {
    attrs: {
      "data-solid-render-id": renderId
    },
    html: componentHtml
  };
}
__name(renderToStaticMarkup, "renderToStaticMarkup");
var renderer = {
  name: "@astrojs/solid",
  check,
  renderToStaticMarkup,
  supportsAstroStaticSlot: true,
  renderHydrationScript: /* @__PURE__ */ __name(() => generateHydrationScript(), "renderHydrationScript")
};
var server_default = renderer;
var renderers = [Object.assign({ "name": "@astrojs/solid-js", "clientEntrypoint": "@astrojs/solid-js/client.js", "serverEntrypoint": "@astrojs/solid-js/server.js" }, { ssr: server_default })];

// .wrangler/tmp/pages-aJ3rp1/chunks/_@astrojs-ssr-adapter_CrE5Lg7U.mjs
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_internal_CwtpzG_q();
init_index_DfvzXTkm();
init_server_jD9syGVz();
init_astro_designed_error_pages_Bb_tmHv();
import "cloudflare:workers";

// .wrangler/tmp/pages-aJ3rp1/chunks/noop-middleware_wbGI4Jzg.mjs
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_server_jD9syGVz();
globalThis.process ??= {};
globalThis.process.env ??= {};
var NOOP_MIDDLEWARE_FN = /* @__PURE__ */ __name(async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
}, "NOOP_MIDDLEWARE_FN");

// .wrangler/tmp/pages-aJ3rp1/chunks/_@astrojs-ssr-adapter_CrE5Lg7U.mjs
globalThis.process ??= {};
globalThis.process.env ??= {};
function createI18nMiddleware(i18n, base, trailingSlash, format) {
  if (!i18n) return (_2, next) => next();
  const payload = {
    ...i18n,
    trailingSlash,
    base,
    format
  };
  const _redirectToDefaultLocale = redirectToDefaultLocale(payload);
  const _noFoundForNonLocaleRoute = notFound(payload);
  const _requestHasLocale = requestHasLocale(payload.locales);
  const _redirectToFallback = redirectToFallback(payload);
  const prefixAlways = /* @__PURE__ */ __name((context3, response) => {
    const url = context3.url;
    if (url.pathname === base + "/" || url.pathname === base) {
      return _redirectToDefaultLocale(context3);
    } else if (!_requestHasLocale(context3)) {
      return _noFoundForNonLocaleRoute(context3, response);
    }
    return void 0;
  }, "prefixAlways");
  const prefixOtherLocales = /* @__PURE__ */ __name((context3, response) => {
    let pathnameContainsDefaultLocale = false;
    const url = context3.url;
    for (const segment of url.pathname.split("/")) {
      if (normalizeTheLocale(segment) === normalizeTheLocale(i18n.defaultLocale)) {
        pathnameContainsDefaultLocale = true;
        break;
      }
    }
    if (pathnameContainsDefaultLocale) {
      const newLocation = url.pathname.replace(`/${i18n.defaultLocale}`, "");
      response.headers.set("Location", newLocation);
      return _noFoundForNonLocaleRoute(context3);
    }
    return void 0;
  }, "prefixOtherLocales");
  return async (context3, next) => {
    const response = await next();
    const type = response.headers.get(ROUTE_TYPE_HEADER);
    const isReroute = response.headers.get(REROUTE_DIRECTIVE_HEADER);
    if (isReroute === "no" && typeof i18n.fallback === "undefined") {
      return response;
    }
    if (type !== "page" && type !== "fallback") {
      return response;
    }
    if (requestIs404Or500(context3.request, base)) {
      return response;
    }
    if (isRequestServerIsland(context3.request, base)) {
      return response;
    }
    const { currentLocale } = context3;
    switch (i18n.strategy) {
      // NOTE: theoretically, we should never hit this code path
      case "manual": {
        return response;
      }
      case "domains-prefix-other-locales": {
        if (localeHasntDomain(i18n, currentLocale)) {
          const result = prefixOtherLocales(context3, response);
          if (result) {
            return result;
          }
        }
        break;
      }
      case "pathname-prefix-other-locales": {
        const result = prefixOtherLocales(context3, response);
        if (result) {
          return result;
        }
        break;
      }
      case "domains-prefix-always-no-redirect": {
        if (localeHasntDomain(i18n, currentLocale)) {
          const result = _noFoundForNonLocaleRoute(context3, response);
          if (result) {
            return result;
          }
        }
        break;
      }
      case "pathname-prefix-always-no-redirect": {
        const result = _noFoundForNonLocaleRoute(context3, response);
        if (result) {
          return result;
        }
        break;
      }
      case "pathname-prefix-always": {
        const result = prefixAlways(context3, response);
        if (result) {
          return result;
        }
        break;
      }
      case "domains-prefix-always": {
        if (localeHasntDomain(i18n, currentLocale)) {
          const result = prefixAlways(context3, response);
          if (result) {
            return result;
          }
        }
        break;
      }
    }
    return _redirectToFallback(context3, response);
  };
}
__name(createI18nMiddleware, "createI18nMiddleware");
function localeHasntDomain(i18n, currentLocale) {
  for (const domainLocale of Object.values(i18n.domainLookupTable)) {
    if (domainLocale === currentLocale) {
      return false;
    }
  }
  return true;
}
__name(localeHasntDomain, "localeHasntDomain");
var NOOP_ACTIONS_MOD = {
  server: {}
};
var FORM_CONTENT_TYPES = [
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
];
var SAFE_METHODS = ["GET", "HEAD", "OPTIONS"];
function createOriginCheckMiddleware() {
  return defineMiddleware((context3, next) => {
    const { request, url, isPrerendered } = context3;
    if (isPrerendered) {
      return next();
    }
    if (SAFE_METHODS.includes(request.method)) {
      return next();
    }
    const isSameOrigin = request.headers.get("origin") === url.origin;
    const hasContentType2 = request.headers.has("content-type");
    if (hasContentType2) {
      const formLikeHeader = hasFormLikeHeader(request.headers.get("content-type"));
      if (formLikeHeader && !isSameOrigin) {
        return new Response(`Cross-site ${request.method} form submissions are forbidden`, {
          status: 403
        });
      }
    } else {
      if (!isSameOrigin) {
        return new Response(`Cross-site ${request.method} form submissions are forbidden`, {
          status: 403
        });
      }
    }
    return next();
  });
}
__name(createOriginCheckMiddleware, "createOriginCheckMiddleware");
function hasFormLikeHeader(contentType) {
  if (contentType) {
    for (const FORM_CONTENT_TYPE of FORM_CONTENT_TYPES) {
      if (contentType.toLowerCase().includes(FORM_CONTENT_TYPE)) {
        return true;
      }
    }
  }
  return false;
}
__name(hasFormLikeHeader, "hasFormLikeHeader");
function createDefaultRoutes(manifest2) {
  const root = new URL(manifest2.hrefRoot);
  return [
    {
      instance: default404Instance,
      matchesComponent: /* @__PURE__ */ __name((filePath) => filePath.href === new URL(DEFAULT_404_COMPONENT, root).href, "matchesComponent"),
      route: DEFAULT_404_ROUTE.route,
      component: DEFAULT_404_COMPONENT
    },
    {
      instance: createEndpoint(manifest2),
      matchesComponent: /* @__PURE__ */ __name((filePath) => filePath.href === new URL(SERVER_ISLAND_COMPONENT, root).href, "matchesComponent"),
      route: SERVER_ISLAND_ROUTE,
      component: SERVER_ISLAND_COMPONENT
    }
  ];
}
__name(createDefaultRoutes, "createDefaultRoutes");
var Pipeline = class {
  static {
    __name(this, "Pipeline");
  }
  constructor(logger, manifest2, runtimeMode, renderers2, resolve, serverLike, streaming, adapterName = manifest2.adapterName, clientDirectives = manifest2.clientDirectives, inlinedScripts = manifest2.inlinedScripts, compressHTML = manifest2.compressHTML, i18n = manifest2.i18n, middleware = manifest2.middleware, routeCache = new RouteCache(logger, runtimeMode), site = manifest2.site ? new URL(manifest2.site) : void 0, defaultRoutes = createDefaultRoutes(manifest2), actions = manifest2.actions) {
    this.logger = logger;
    this.manifest = manifest2;
    this.runtimeMode = runtimeMode;
    this.renderers = renderers2;
    this.resolve = resolve;
    this.serverLike = serverLike;
    this.streaming = streaming;
    this.adapterName = adapterName;
    this.clientDirectives = clientDirectives;
    this.inlinedScripts = inlinedScripts;
    this.compressHTML = compressHTML;
    this.i18n = i18n;
    this.middleware = middleware;
    this.routeCache = routeCache;
    this.site = site;
    this.defaultRoutes = defaultRoutes;
    this.actions = actions;
    this.internalMiddleware = [];
    if (i18n?.strategy !== "manual") {
      this.internalMiddleware.push(
        createI18nMiddleware(i18n, manifest2.base, manifest2.trailingSlash, manifest2.buildFormat)
      );
    }
  }
  internalMiddleware;
  resolvedMiddleware = void 0;
  resolvedActions = void 0;
  /**
   * Resolves the middleware from the manifest, and returns the `onRequest` function. If `onRequest` isn't there,
   * it returns a no-op function
   */
  async getMiddleware() {
    if (this.resolvedMiddleware) {
      return this.resolvedMiddleware;
    } else if (this.middleware) {
      const middlewareInstance = await this.middleware();
      const onRequest2 = middlewareInstance.onRequest ?? NOOP_MIDDLEWARE_FN;
      if (this.manifest.checkOrigin) {
        this.resolvedMiddleware = sequence(createOriginCheckMiddleware(), onRequest2);
      } else {
        this.resolvedMiddleware = onRequest2;
      }
      return this.resolvedMiddleware;
    } else {
      this.resolvedMiddleware = NOOP_MIDDLEWARE_FN;
      return this.resolvedMiddleware;
    }
  }
  setActions(actions) {
    this.resolvedActions = actions;
  }
  async getActions() {
    if (this.resolvedActions) {
      return this.resolvedActions;
    } else if (this.actions) {
      return await this.actions();
    }
    return NOOP_ACTIONS_MOD;
  }
  async getAction(path) {
    const pathKeys = path.split(".").map((key) => decodeURIComponent(key));
    let { server: server2 } = await this.getActions();
    if (!server2 || !(typeof server2 === "object")) {
      throw new TypeError(
        `Expected \`server\` export in actions file to be an object. Received ${typeof server2}.`
      );
    }
    for (const key of pathKeys) {
      if (!(key in server2)) {
        throw new AstroError({
          ...ActionNotFoundError,
          message: ActionNotFoundError.message(pathKeys.join("."))
        });
      }
      server2 = server2[key];
    }
    if (typeof server2 !== "function") {
      throw new TypeError(
        `Expected handler for action ${pathKeys.join(".")} to be a function. Received ${typeof server2}.`
      );
    }
    return server2;
  }
};
var RedirectComponentInstance = {
  default() {
    return new Response(null, {
      status: 301
    });
  }
};
var RedirectSinglePageBuiltModule = {
  page: /* @__PURE__ */ __name(() => Promise.resolve(RedirectComponentInstance), "page"),
  onRequest: /* @__PURE__ */ __name((_2, next) => next(), "onRequest"),
  renderers: []
};
var dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
var levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log3(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
__name(log3, "log");
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
__name(isLogLevelEnabled, "isLogLevelEnabled");
function info3(opts, label, message, newLine = true) {
  return log3(opts, "info", label, message, newLine);
}
__name(info3, "info");
function warn3(opts, label, message, newLine = true) {
  return log3(opts, "warn", label, message, newLine);
}
__name(warn3, "warn");
function error3(opts, label, message, newLine = true) {
  return log3(opts, "error", label, message, newLine);
}
__name(error3, "error");
function debug3(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
__name(debug3, "debug");
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
__name(getEventPrefix, "getEventPrefix");
var Logger = class {
  static {
    __name(this, "Logger");
  }
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info3(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn3(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error3(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug3(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
};
var AstroIntegrationLogger = class _AstroIntegrationLogger {
  static {
    __name(this, "AstroIntegrationLogger");
  }
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new _AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info3(this.options, this.label, message);
  }
  warn(message) {
    warn3(this.options, this.label, message);
  }
  error(message) {
    error3(this.options, this.label, message);
  }
  debug(message) {
    debug3(this.label, message);
  }
};
var consoleLogDestination = {
  write(event) {
    let dest = console.error;
    if (levels[event.level] < levels["error"]) {
      dest = console.log;
    }
    if (event.label === "SKIP_FORMAT") {
      dest(event.message);
    } else {
      dest(getEventPrefix(event) + " " + event.message);
    }
    return true;
  }
};
function getAssetsPrefix(fileExtension2, assetsPrefix) {
  if (!assetsPrefix) return "";
  if (typeof assetsPrefix === "string") return assetsPrefix;
  const dotLessFileExtension = fileExtension2.slice(1);
  if (assetsPrefix[dotLessFileExtension]) {
    return assetsPrefix[dotLessFileExtension];
  }
  return assetsPrefix.fallback;
}
__name(getAssetsPrefix, "getAssetsPrefix");
function createAssetLink(href, base, assetsPrefix) {
  if (assetsPrefix) {
    const pf = getAssetsPrefix(fileExtension(href), assetsPrefix);
    return joinPaths(pf, slash(href));
  } else if (base) {
    return prependForwardSlash(joinPaths(base, slash(href)));
  } else {
    return href;
  }
}
__name(createAssetLink, "createAssetLink");
function createStylesheetElement(stylesheet, base, assetsPrefix) {
  if (stylesheet.type === "inline") {
    return {
      props: {},
      children: stylesheet.content
    };
  } else {
    return {
      props: {
        rel: "stylesheet",
        href: createAssetLink(stylesheet.src, base, assetsPrefix)
      },
      children: ""
    };
  }
}
__name(createStylesheetElement, "createStylesheetElement");
function createStylesheetElementSet(stylesheets, base, assetsPrefix) {
  return new Set(stylesheets.map((s2) => createStylesheetElement(s2, base, assetsPrefix)));
}
__name(createStylesheetElementSet, "createStylesheetElementSet");
function createModuleScriptElement(script, base, assetsPrefix) {
  if (script.type === "external") {
    return createModuleScriptElementWithSrc(script.value, base, assetsPrefix);
  } else {
    return {
      props: {
        type: "module"
      },
      children: script.value
    };
  }
}
__name(createModuleScriptElement, "createModuleScriptElement");
function createModuleScriptElementWithSrc(src, base, assetsPrefix) {
  return {
    props: {
      type: "module",
      src: createAssetLink(src, base, assetsPrefix)
    },
    children: ""
  };
}
__name(createModuleScriptElementWithSrc, "createModuleScriptElementWithSrc");
function redirectTemplate({
  status,
  absoluteLocation,
  relativeLocation,
  from
}) {
  const delay = status === 302 ? 2 : 0;
  return `<!doctype html>
<title>Redirecting to: ${relativeLocation}</title>
<meta http-equiv="refresh" content="${delay};url=${relativeLocation}">
<meta name="robots" content="noindex">
<link rel="canonical" href="${absoluteLocation}">
<body>
	<a href="${relativeLocation}">Redirecting ${from ? `from <code>${from}</code> ` : ""}to <code>${relativeLocation}</code></a>
</body>`;
}
__name(redirectTemplate, "redirectTemplate");
var AppPipeline = class _AppPipeline extends Pipeline {
  static {
    __name(this, "AppPipeline");
  }
  static create({
    logger,
    manifest: manifest2,
    runtimeMode,
    renderers: renderers2,
    resolve,
    serverLike,
    streaming,
    defaultRoutes
  }) {
    const pipeline = new _AppPipeline(
      logger,
      manifest2,
      runtimeMode,
      renderers2,
      resolve,
      serverLike,
      streaming,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      defaultRoutes
    );
    return pipeline;
  }
  headElements(routeData) {
    const routeInfo = this.manifest.routes.find((route) => route.routeData === routeData);
    const links = /* @__PURE__ */ new Set();
    const scripts = /* @__PURE__ */ new Set();
    const styles = createStylesheetElementSet(routeInfo?.styles ?? []);
    for (const script of routeInfo?.scripts ?? []) {
      if ("stage" in script) {
        if (script.stage === "head-inline") {
          scripts.add({
            props: {},
            children: script.children
          });
        }
      } else {
        scripts.add(createModuleScriptElement(script));
      }
    }
    return { links, styles, scripts };
  }
  componentMetadata() {
  }
  async getComponentByRoute(routeData) {
    const module = await this.getModuleForRoute(routeData);
    return module.page();
  }
  async tryRewrite(payload, request) {
    const { newUrl, pathname, routeData } = findRouteToRewrite({
      payload,
      request,
      routes: this.manifest?.routes.map((r2) => r2.routeData),
      trailingSlash: this.manifest.trailingSlash,
      buildFormat: this.manifest.buildFormat,
      base: this.manifest.base
    });
    const componentInstance = await this.getComponentByRoute(routeData);
    return { newUrl, pathname, componentInstance, routeData };
  }
  async getModuleForRoute(route) {
    for (const defaultRoute of this.defaultRoutes) {
      if (route.component === defaultRoute.component) {
        return {
          page: /* @__PURE__ */ __name(() => Promise.resolve(defaultRoute.instance), "page"),
          renderers: []
        };
      }
    }
    if (route.type === "redirect") {
      return RedirectSinglePageBuiltModule;
    } else {
      if (this.manifest.pageMap) {
        const importComponentInstance = this.manifest.pageMap.get(route.component);
        if (!importComponentInstance) {
          throw new Error(
            `Unexpectedly unable to find a component instance for route ${route.route}`
          );
        }
        return await importComponentInstance();
      } else if (this.manifest.pageModule) {
        return this.manifest.pageModule;
      }
      throw new Error(
        "Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue."
      );
    }
  }
};
var App = class _App {
  static {
    __name(this, "App");
  }
  #manifest;
  #manifestData;
  #logger = new Logger({
    dest: consoleLogDestination,
    level: "info"
  });
  #baseWithoutTrailingSlash;
  #pipeline;
  #adapterLogger;
  constructor(manifest2, streaming = true) {
    this.#manifest = manifest2;
    this.#manifestData = {
      routes: manifest2.routes.map((route) => route.routeData)
    };
    ensure404Route(this.#manifestData);
    this.#baseWithoutTrailingSlash = removeTrailingForwardSlash(this.#manifest.base);
    this.#pipeline = this.#createPipeline(streaming);
    this.#adapterLogger = new AstroIntegrationLogger(
      this.#logger.options,
      this.#manifest.adapterName
    );
  }
  getAdapterLogger() {
    return this.#adapterLogger;
  }
  /**
   * Creates a pipeline by reading the stored manifest
   *
   * @param streaming
   * @private
   */
  #createPipeline(streaming = false) {
    return AppPipeline.create({
      logger: this.#logger,
      manifest: this.#manifest,
      runtimeMode: "production",
      renderers: this.#manifest.renderers,
      defaultRoutes: createDefaultRoutes(this.#manifest),
      resolve: /* @__PURE__ */ __name(async (specifier) => {
        if (!(specifier in this.#manifest.entryModules)) {
          throw new Error(`Unable to resolve [${specifier}]`);
        }
        const bundlePath = this.#manifest.entryModules[specifier];
        if (bundlePath.startsWith("data:") || bundlePath.length === 0) {
          return bundlePath;
        } else {
          return createAssetLink(bundlePath, this.#manifest.base, this.#manifest.assetsPrefix);
        }
      }, "resolve"),
      serverLike: true,
      streaming
    });
  }
  set setManifestData(newManifestData) {
    this.#manifestData = newManifestData;
  }
  removeBase(pathname) {
    if (pathname.startsWith(this.#manifest.base)) {
      return pathname.slice(this.#baseWithoutTrailingSlash.length + 1);
    }
    return pathname;
  }
  /**
   * It removes the base from the request URL, prepends it with a forward slash and attempts to decoded it.
   *
   * If the decoding fails, it logs the error and return the pathname as is.
   * @param request
   * @private
   */
  #getPathnameFromRequest(request) {
    const url = new URL(request.url);
    const pathname = prependForwardSlash(this.removeBase(url.pathname));
    try {
      return decodeURI(pathname);
    } catch (e) {
      this.getAdapterLogger().error(e.toString());
      return pathname;
    }
  }
  match(request) {
    const url = new URL(request.url);
    if (this.#manifest.assets.has(url.pathname)) return void 0;
    let pathname = this.#computePathnameFromDomain(request);
    if (!pathname) {
      pathname = prependForwardSlash(this.removeBase(url.pathname));
    }
    let routeData = matchRoute(decodeURI(pathname), this.#manifestData);
    if (!routeData || routeData.prerender) return void 0;
    return routeData;
  }
  #computePathnameFromDomain(request) {
    let pathname = void 0;
    const url = new URL(request.url);
    if (this.#manifest.i18n && (this.#manifest.i18n.strategy === "domains-prefix-always" || this.#manifest.i18n.strategy === "domains-prefix-other-locales" || this.#manifest.i18n.strategy === "domains-prefix-always-no-redirect")) {
      let host = request.headers.get("X-Forwarded-Host");
      let protocol = request.headers.get("X-Forwarded-Proto");
      if (protocol) {
        protocol = protocol + ":";
      } else {
        protocol = url.protocol;
      }
      if (!host) {
        host = request.headers.get("Host");
      }
      if (host && protocol) {
        host = host.split(":")[0];
        try {
          let locale;
          const hostAsUrl = new URL(`${protocol}//${host}`);
          for (const [domainKey, localeValue] of Object.entries(
            this.#manifest.i18n.domainLookupTable
          )) {
            const domainKeyAsUrl = new URL(domainKey);
            if (hostAsUrl.host === domainKeyAsUrl.host && hostAsUrl.protocol === domainKeyAsUrl.protocol) {
              locale = localeValue;
              break;
            }
          }
          if (locale) {
            pathname = prependForwardSlash(
              joinPaths(normalizeTheLocale(locale), this.removeBase(url.pathname))
            );
            if (url.pathname.endsWith("/")) {
              pathname = appendForwardSlash(pathname);
            }
          }
        } catch (e) {
          this.#logger.error(
            "router",
            `Astro tried to parse ${protocol}//${host} as an URL, but it threw a parsing error. Check the X-Forwarded-Host and X-Forwarded-Proto headers.`
          );
          this.#logger.error("router", `Error: ${e}`);
        }
      }
    }
    return pathname;
  }
  #redirectTrailingSlash(pathname) {
    const { trailingSlash } = this.#manifest;
    if (pathname === "/" || pathname.startsWith("/_")) {
      return pathname;
    }
    const path = collapseDuplicateTrailingSlashes(pathname, trailingSlash !== "never");
    if (path !== pathname) {
      return path;
    }
    if (trailingSlash === "ignore") {
      return pathname;
    }
    if (trailingSlash === "always" && !hasFileExtension(pathname)) {
      return appendForwardSlash(pathname);
    }
    if (trailingSlash === "never") {
      return removeTrailingForwardSlash(pathname);
    }
    return pathname;
  }
  async render(request, renderOptions) {
    let routeData;
    let locals;
    let clientAddress;
    let addCookieHeader;
    const url = new URL(request.url);
    const redirect = this.#redirectTrailingSlash(url.pathname);
    const prerenderedErrorPageFetch = renderOptions?.prerenderedErrorPageFetch ?? fetch;
    if (redirect !== url.pathname) {
      const status = request.method === "GET" ? 301 : 308;
      return new Response(
        redirectTemplate({
          status,
          relativeLocation: url.pathname,
          absoluteLocation: redirect,
          from: request.url
        }),
        {
          status,
          headers: {
            location: redirect + url.search
          }
        }
      );
    }
    addCookieHeader = renderOptions?.addCookieHeader;
    clientAddress = renderOptions?.clientAddress ?? Reflect.get(request, clientAddressSymbol);
    routeData = renderOptions?.routeData;
    locals = renderOptions?.locals;
    if (routeData) {
      this.#logger.debug(
        "router",
        "The adapter " + this.#manifest.adapterName + " provided a custom RouteData for ",
        request.url
      );
      this.#logger.debug("router", "RouteData:\n" + routeData);
    }
    if (locals) {
      if (typeof locals !== "object") {
        const error5 = new AstroError(LocalsNotAnObject);
        this.#logger.error(null, error5.stack);
        return this.#renderError(request, {
          status: 500,
          error: error5,
          clientAddress,
          prerenderedErrorPageFetch
        });
      }
    }
    if (!routeData) {
      routeData = this.match(request);
      this.#logger.debug("router", "Astro matched the following route for " + request.url);
      this.#logger.debug("router", "RouteData:\n" + routeData);
    }
    if (!routeData) {
      routeData = this.#manifestData.routes.find(
        (route) => route.component === "404.astro" || route.component === DEFAULT_404_COMPONENT
      );
    }
    if (!routeData) {
      this.#logger.debug("router", "Astro hasn't found routes that match " + request.url);
      this.#logger.debug("router", "Here's the available routes:\n", this.#manifestData);
      return this.#renderError(request, {
        locals,
        status: 404,
        clientAddress,
        prerenderedErrorPageFetch
      });
    }
    const pathname = this.#getPathnameFromRequest(request);
    const defaultStatus = this.#getDefaultStatusCode(routeData, pathname);
    let response;
    let session;
    try {
      const mod = await this.#pipeline.getModuleForRoute(routeData);
      const renderContext = await RenderContext.create({
        pipeline: this.#pipeline,
        locals,
        pathname,
        request,
        routeData,
        status: defaultStatus,
        clientAddress
      });
      session = renderContext.session;
      response = await renderContext.render(await mod.page());
    } catch (err) {
      this.#logger.error(null, err.stack || err.message || String(err));
      return this.#renderError(request, {
        locals,
        status: 500,
        error: err,
        clientAddress,
        prerenderedErrorPageFetch
      });
    } finally {
      await session?.[PERSIST_SYMBOL]();
    }
    if (REROUTABLE_STATUS_CODES.includes(response.status) && response.headers.get(REROUTE_DIRECTIVE_HEADER) !== "no") {
      return this.#renderError(request, {
        locals,
        response,
        status: response.status,
        // We don't have an error to report here. Passing null means we pass nothing intentionally
        // while undefined means there's no error
        error: response.status === 500 ? null : void 0,
        clientAddress,
        prerenderedErrorPageFetch
      });
    }
    if (response.headers.has(REROUTE_DIRECTIVE_HEADER)) {
      response.headers.delete(REROUTE_DIRECTIVE_HEADER);
    }
    if (addCookieHeader) {
      for (const setCookieHeaderValue of _App.getSetCookieFromResponse(response)) {
        response.headers.append("set-cookie", setCookieHeaderValue);
      }
    }
    Reflect.set(response, responseSentSymbol, true);
    return response;
  }
  setCookieHeaders(response) {
    return getSetCookiesFromResponse(response);
  }
  /**
   * Reads all the cookies written by `Astro.cookie.set()` onto the passed response.
   * For example,
   * ```ts
   * for (const cookie_ of App.getSetCookieFromResponse(response)) {
   *     const cookie: string = cookie_
   * }
   * ```
   * @param response The response to read cookies from.
   * @returns An iterator that yields key-value pairs as equal-sign-separated strings.
   */
  static getSetCookieFromResponse = getSetCookiesFromResponse;
  /**
   * If it is a known error code, try sending the according page (e.g. 404.astro / 500.astro).
   * This also handles pre-rendered /404 or /500 routes
   */
  async #renderError(request, {
    locals,
    status,
    response: originalResponse,
    skipMiddleware = false,
    error: error5,
    clientAddress,
    prerenderedErrorPageFetch
  }) {
    const errorRoutePath = `/${status}${this.#manifest.trailingSlash === "always" ? "/" : ""}`;
    const errorRouteData = matchRoute(errorRoutePath, this.#manifestData);
    const url = new URL(request.url);
    if (errorRouteData) {
      if (errorRouteData.prerender) {
        const maybeDotHtml = errorRouteData.route.endsWith(`/${status}`) ? ".html" : "";
        const statusURL = new URL(
          `${this.#baseWithoutTrailingSlash}/${status}${maybeDotHtml}`,
          url
        );
        if (statusURL.toString() !== request.url) {
          const response2 = await prerenderedErrorPageFetch(statusURL.toString());
          const override = { status };
          return this.#mergeResponses(response2, originalResponse, override);
        }
      }
      const mod = await this.#pipeline.getModuleForRoute(errorRouteData);
      let session;
      try {
        const renderContext = await RenderContext.create({
          locals,
          pipeline: this.#pipeline,
          middleware: skipMiddleware ? NOOP_MIDDLEWARE_FN : void 0,
          pathname: this.#getPathnameFromRequest(request),
          request,
          routeData: errorRouteData,
          status,
          props: { error: error5 },
          clientAddress
        });
        session = renderContext.session;
        const response2 = await renderContext.render(await mod.page());
        return this.#mergeResponses(response2, originalResponse);
      } catch {
        if (skipMiddleware === false) {
          return this.#renderError(request, {
            locals,
            status,
            response: originalResponse,
            skipMiddleware: true,
            clientAddress,
            prerenderedErrorPageFetch
          });
        }
      } finally {
        await session?.[PERSIST_SYMBOL]();
      }
    }
    const response = this.#mergeResponses(new Response(null, { status }), originalResponse);
    Reflect.set(response, responseSentSymbol, true);
    return response;
  }
  #mergeResponses(newResponse, originalResponse, override) {
    if (!originalResponse) {
      if (override !== void 0) {
        return new Response(newResponse.body, {
          status: override.status,
          statusText: newResponse.statusText,
          headers: newResponse.headers
        });
      }
      return newResponse;
    }
    const status = override?.status ? override.status : originalResponse.status === 200 ? newResponse.status : originalResponse.status;
    try {
      originalResponse.headers.delete("Content-type");
    } catch {
    }
    const mergedHeaders = new Map([
      ...Array.from(newResponse.headers),
      ...Array.from(originalResponse.headers)
    ]);
    const newHeaders = new Headers();
    for (const [name, value] of mergedHeaders) {
      newHeaders.set(name, value);
    }
    return new Response(newResponse.body, {
      status,
      statusText: status === 200 ? newResponse.statusText : originalResponse.statusText,
      // If you're looking at here for possible bugs, it means that it's not a bug.
      // With the middleware, users can meddle with headers, and we should pass to the 404/500.
      // If users see something weird, it's because they are setting some headers they should not.
      //
      // Although, we don't want it to replace the content-type, because the error page must return `text/html`
      headers: newHeaders
    });
  }
  #getDefaultStatusCode(routeData, pathname) {
    if (!routeData.pattern.test(pathname)) {
      for (const fallbackRoute of routeData.fallbackRoutes) {
        if (fallbackRoute.pattern.test(pathname)) {
          return 302;
        }
      }
    }
    const route = removeTrailingForwardSlash(routeData.route);
    if (route.endsWith("/404")) return 404;
    if (route.endsWith("/500")) return 500;
    return 200;
  }
};
function createExports(manifest2) {
  const app = new App(manifest2);
  const fetch2 = /* @__PURE__ */ __name(async (request, env3, context3) => {
    const { pathname } = new URL(request.url);
    const bindingName = "SESSION";
    globalThis.__env__ ??= {};
    globalThis.__env__[bindingName] = env3[bindingName];
    if (manifest2.assets.has(pathname)) {
      return env3.ASSETS.fetch(request.url.replace(/\.html$/, ""));
    }
    const routeData = app.match(request);
    if (!routeData) {
      const asset = await env3.ASSETS.fetch(
        request.url.replace(/index.html$/, "").replace(/\.html$/, "")
      );
      if (asset.status !== 404) {
        return asset;
      }
    }
    Reflect.set(
      request,
      Symbol.for("astro.clientAddress"),
      request.headers.get("cf-connecting-ip")
    );
    process.env.ASTRO_STUDIO_APP_TOKEN ??= (() => {
      if (typeof env3.ASTRO_STUDIO_APP_TOKEN === "string") {
        return env3.ASTRO_STUDIO_APP_TOKEN;
      }
    })();
    const locals = {
      runtime: {
        env: env3,
        cf: request.cf,
        caches,
        ctx: {
          waitUntil: /* @__PURE__ */ __name((promise) => context3.waitUntil(promise), "waitUntil"),
          // Currently not available: https://developers.cloudflare.com/pages/platform/known-issues/#pages-functions
          passThroughOnException: /* @__PURE__ */ __name(() => {
            throw new Error(
              "`passThroughOnException` is currently not available in Cloudflare Pages. See https://developers.cloudflare.com/pages/platform/known-issues/#pages-functions."
            );
          }, "passThroughOnException"),
          props: {}
        }
      }
    };
    const response = await app.render(request, { routeData, locals });
    if (app.setCookieHeaders) {
      for (const setCookieHeader of app.setCookieHeaders(response)) {
        response.headers.append("Set-Cookie", setCookieHeader);
      }
    }
    return response;
  }, "fetch");
  return { default: { fetch: fetch2 } };
}
__name(createExports, "createExports");
var serverEntrypointModule = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createExports
}, Symbol.toStringTag, { value: "Module" }));

// .wrangler/tmp/pages-aJ3rp1/manifest_DlIe1y8g.mjs
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_server_jD9syGVz();
init_astro_designed_error_pages_Bb_tmHv();
globalThis.process ??= {};
globalThis.process.env ??= {};
function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
__name(sanitizeParams, "sanitizeParams");
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
__name(getParameter, "getParameter");
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
__name(getSegment, "getSegment");
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}
__name(getRouteGenerator, "getRouteGenerator");
function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}
__name(deserializeRouteData, "deserializeRouteData");
function deserializeManifest(serializedManifest) {
  const routes2 = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes2.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes: routes2,
    serverIslandNameMap,
    key
  };
}
__name(deserializeManifest, "deserializeManifest");
var manifest = deserializeManifest({ "hrefRoot": "file:///Users/treyhardin/Documents/Active%20Projects/phenomenon-app/", "cacheDir": "file:///Users/treyhardin/Documents/Active%20Projects/phenomenon-app/node_modules/.astro/", "outDir": "file:///Users/treyhardin/Documents/Active%20Projects/phenomenon-app/dist/", "srcDir": "file:///Users/treyhardin/Documents/Active%20Projects/phenomenon-app/src/", "publicDir": "file:///Users/treyhardin/Documents/Active%20Projects/phenomenon-app/public/", "buildClientDir": "file:///Users/treyhardin/Documents/Active%20Projects/phenomenon-app/dist/", "buildServerDir": "file:///Users/treyhardin/Documents/Active%20Projects/phenomenon-app/dist/_worker.js/", "adapterName": "@astrojs/cloudflare", "routes": [{ "file": "", "links": [], "scripts": [], "styles": [], "routeData": { "type": "page", "component": "_server-islands.astro", "params": ["name"], "segments": [[{ "content": "_server-islands", "dynamic": false, "spread": false }], [{ "content": "name", "dynamic": true, "spread": false }]], "pattern": "^\\/_server-islands\\/([^/]+?)\\/?$", "prerender": false, "isIndex": false, "fallbackRoutes": [], "route": "/_server-islands/[name]", "origin": "internal", "_meta": { "trailingSlash": "ignore" } } }, { "file": "api/getLocations", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/api/getlocations", "isIndex": false, "type": "endpoint", "pattern": "^\\/api\\/getLocations\\/?$", "segments": [[{ "content": "api", "dynamic": false, "spread": false }], [{ "content": "getLocations", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/api/getLocations.ts", "pathname": "/api/getLocations", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "shapes/index.html", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/shapes", "isIndex": true, "type": "page", "pattern": "^\\/shapes\\/?$", "segments": [[{ "content": "shapes", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/shapes/index.astro", "pathname": "/shapes", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }, { "file": "index.html", "links": [], "scripts": [], "styles": [], "routeData": { "route": "/", "isIndex": true, "type": "page", "pattern": "^\\/$", "segments": [], "params": [], "component": "src/pages/index.astro", "pathname": "/", "prerender": true, "fallbackRoutes": [], "distURL": [], "origin": "project", "_meta": { "trailingSlash": "ignore" } } }], "base": "/", "trailingSlash": "ignore", "compressHTML": true, "componentMetadata": [["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/Map.astro", { "propagation": "in-tree", "containsHead": false }], ["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/pages/[country]/[state]/[city]/index.astro", { "propagation": "in-tree", "containsHead": true }], ["\0@astro-page:src/pages/[country]/[state]/[city]/index@_@astro", { "propagation": "in-tree", "containsHead": false }], ["\0@astrojs-ssr-virtual-entry", { "propagation": "in-tree", "containsHead": false }], ["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/pages/[country]/[state]/index.astro", { "propagation": "in-tree", "containsHead": true }], ["\0@astro-page:src/pages/[country]/[state]/index@_@astro", { "propagation": "in-tree", "containsHead": false }], ["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/pages/[country]/index.astro", { "propagation": "in-tree", "containsHead": true }], ["\0@astro-page:src/pages/[country]/index@_@astro", { "propagation": "in-tree", "containsHead": false }], ["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/pages/index.astro", { "propagation": "in-tree", "containsHead": true }], ["\0@astro-page:src/pages/index@_@astro", { "propagation": "in-tree", "containsHead": false }], ["\0astro:content", { "propagation": "in-tree", "containsHead": false }], ["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/ReportCard.astro", { "propagation": "in-tree", "containsHead": false }], ["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/ReportList.astro", { "propagation": "in-tree", "containsHead": false }], ["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/MapNavigation.astro", { "propagation": "in-tree", "containsHead": false }], ["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/ShapeReports.astro", { "propagation": "in-tree", "containsHead": false }], ["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/pages/shapes/[shape].astro", { "propagation": "in-tree", "containsHead": true }], ["\0@astro-page:src/pages/shapes/[shape]@_@astro", { "propagation": "in-tree", "containsHead": false }], ["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/pages/shapes/index.astro", { "propagation": "in-tree", "containsHead": true }], ["\0@astro-page:src/pages/shapes/index@_@astro", { "propagation": "in-tree", "containsHead": false }], ["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/ShapesList.astro", { "propagation": "in-tree", "containsHead": false }], ["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/pages/api/getLocations.ts", { "propagation": "in-tree", "containsHead": false }], ["\0@astro-page:src/pages/api/getLocations@_@ts", { "propagation": "in-tree", "containsHead": false }]], "renderers": [], "clientDirectives": [["idle", '(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value=="object"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};"requestIdleCallback"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event("astro:idle"));})();'], ["load", '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();'], ["media", '(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener("change",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event("astro:media"));})();'], ["only", '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();'], ["visible", '(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value=="object"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event("astro:visible"));})();']], "entryModules": { "\0noop-actions": "_noop-actions.mjs", "\0astro-internal:middleware": "_astro-internal_middleware.mjs", "\0@astro-page:src/pages/api/getLocations@_@ts": "pages/api/getlocations.astro.mjs", "\0@astro-page:src/pages/shapes/[shape]@_@astro": "pages/shapes/_shape_.astro.mjs", "\0@astro-page:src/pages/shapes/index@_@astro": "pages/shapes.astro.mjs", "\0@astro-page:src/pages/[country]/[state]/[city]/index@_@astro": "pages/_country_/_state_/_city_.astro.mjs", "\0@astro-page:src/pages/[country]/[state]/index@_@astro": "pages/_country_/_state_.astro.mjs", "\0@astro-page:src/pages/[country]/index@_@astro": "pages/_country_.astro.mjs", "\0@astro-page:src/pages/index@_@astro": "pages/index.astro.mjs", "\0@astrojs-ssr-virtual-entry": "index.js", "\0@astro-renderers": "renderers.mjs", "\0@astrojs-ssr-adapter": "_@astrojs-ssr-adapter.mjs", "/Users/treyhardin/Documents/Active Projects/phenomenon-app/.astro/content-assets.mjs": "chunks/content-assets_XqCgPAV2.mjs", "/Users/treyhardin/Documents/Active Projects/phenomenon-app/.astro/content-modules.mjs": "chunks/content-modules_Bvq7llv8.mjs", "\0astro:data-layer-content": "chunks/_astro_data-layer-content_LK5d0cky.mjs", "/Users/treyhardin/Documents/Active Projects/phenomenon-app/node_modules/astro/dist/assets/services/sharp.js": "chunks/sharp_4MUziQIo.mjs", "/Users/treyhardin/Documents/Active Projects/phenomenon-app/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs": "chunks/cloudflare-kv-binding_DMly_2Gl.mjs", "\0@astrojs-manifest": "manifest_DlIe1y8g.mjs", "/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/search/Search.jsx": "_astro/Search.0jCp46P4.js", "@astrojs/solid-js/client.js": "_astro/client.GYaJ8Ya_.js", "/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/Map.astro?astro&type=script&index=0&lang.ts": "_astro/Map.astro_astro_type_script_index_0_lang.Ci0ORTIL.js", "/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/MapNavigation.astro?astro&type=script&index=0&lang.ts": "_astro/MapNavigation.astro_astro_type_script_index_0_lang.BP79cktX.js", "/Users/treyhardin/Documents/Active Projects/phenomenon-app/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts": "_astro/ClientRouter.astro_astro_type_script_index_0_lang.BZs-2RF_.js", "astro:scripts/before-hydration.js": "" }, "inlinedScripts": [["/Users/treyhardin/Documents/Active Projects/phenomenon-app/src/components/MapNavigation.astro?astro&type=script&index=0&lang.ts", 'document.addEventListener("astro:page-load",()=>{const e=document.getElementById("map-navigation"),t=document.getElementById("reports-toggle");e&&t&&t.addEventListener("click",()=>{e.dataset.menuOpen==="true"?e.dataset.menuOpen="false":e.dataset.menuOpen="true"})});']], "assets": ["/_astro/pin.Dyk08EWO.svg", "/_astro/close.CyZMWlfN.svg", "/_astro/hamburger.DmAsUKwN.svg", "/_astro/arrow-back.C7tQvhPx.svg", "/_astro/search.CS0asuiH.svg", "/_astro/shape_cigar.uAGcbkE3.svg", "/_astro/shape_disk.BFh1FhUu.svg", "/_astro/shape_chevron.OtSDIAxp.svg", "/_astro/shape_cube.D_YFeg5O.svg", "/_astro/shape_circle.CrKSEKq2.svg", "/_astro/shape_diamond.BUlEwwXq.svg", "/_astro/shape_cylinder.BC7V-W-U.svg", "/_astro/shape_flash.DSnMihLx.svg", "/_astro/shape_egg.CItRDGR7.svg", "/_astro/shape_formation.dKx21m_I.svg", "/_astro/shape_orb.D2T7_bOZ.svg", "/_astro/shape_light.BXE-AYpG.svg", "/_astro/shape_oval.CPN9IEr7.svg", "/_astro/shape_fireball.DLrw-dZq.svg", "/_astro/shape_sphere.B0IqZ72H.svg", "/_astro/shape_rectangle.BkzKbeS_.svg", "/_astro/shape_cross.DhoN_TDI.svg", "/_astro/shape_cone.3Z7deYeI.svg", "/_astro/shape_star.OPq-02VC.svg", "/_astro/shape_teardrop.DmLlYFoN.svg", "/_astro/shape_unknown.IlGMtcX3.svg", "/_astro/shape_triangle.Yq7CqvGt.svg", "/_astro/index.CN-AWh6p.css", "/_astro/index.B32nsG-P.css", "/DrukWide-Heavy.woff", "/DrukWide-Heavy.woff2", "/DrukWide-HeavyItalic.woff", "/DrukWide-HeavyItalic.woff2", "/DrukWide-Medium.woff", "/DrukWide-Medium.woff2", "/PPSupplySans-Regular.woff", "/PPSupplySans-Regular.woff2", "/PPSupplySans-Ultralight.woff", "/PPSupplySans-Ultralight.woff2", "/favicon.svg", "/og_image.png", "/search-data.json", "/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BZs-2RF_.js", "/_astro/Map.astro_astro_type_script_index_0_lang.Ci0ORTIL.js", "/_astro/Search.0jCp46P4.js", "/_astro/client.GYaJ8Ya_.js", "/_astro/web.B3ItKGQM.js", "/_worker.js/_@astrojs-ssr-adapter.mjs", "/_worker.js/_astro-internal_middleware.mjs", "/_worker.js/_noop-actions.mjs", "/_worker.js/index.js", "/_worker.js/renderers.mjs", "/_worker.js/pages/_country_.astro.mjs", "/_worker.js/pages/index.astro.mjs", "/_worker.js/pages/shapes.astro.mjs", "/_worker.js/chunks/Map_Ib_0_7bq.mjs", "/_worker.js/chunks/ReportList_r6OmmvYI.mjs", "/_worker.js/chunks/ShapeReports_BhFJR5Fb.mjs", "/_worker.js/chunks/_@astrojs-ssr-adapter_CrE5Lg7U.mjs", "/_worker.js/chunks/_astro_assets_Bt6mBsS-.mjs", "/_worker.js/chunks/_astro_content_B7YSAPtb.mjs", "/_worker.js/chunks/_astro_data-layer-content_LK5d0cky.mjs", "/_worker.js/chunks/astro-designed-error-pages_Bb--tmHv.mjs", "/_worker.js/chunks/astro_Dl82cMRE.mjs", "/_worker.js/chunks/browser_CNYQJoIP.mjs", "/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs", "/_worker.js/chunks/content-assets_XqCgPAV2.mjs", "/_worker.js/chunks/content-modules_Bvq7llv8.mjs", "/_worker.js/chunks/db-queries_BTxtbHr4.mjs", "/_worker.js/chunks/index_DfvzXTkm.mjs", "/_worker.js/chunks/internal_CwtpzG_q.mjs", "/_worker.js/chunks/noop-middleware_wbGI4Jzg.mjs", "/_worker.js/chunks/parse_EttCPxrw.mjs", "/_worker.js/chunks/sharp_4MUziQIo.mjs", "/_worker.js/_astro/arrow-back.C7tQvhPx.svg", "/_worker.js/_astro/close.CyZMWlfN.svg", "/_worker.js/_astro/hamburger.DmAsUKwN.svg", "/_worker.js/_astro/index.B32nsG-P.css", "/_worker.js/_astro/index.CN-AWh6p.css", "/_worker.js/_astro/pin.Dyk08EWO.svg", "/_worker.js/_astro/search.CS0asuiH.svg", "/_worker.js/_astro/shape_chevron.OtSDIAxp.svg", "/_worker.js/_astro/shape_cigar.uAGcbkE3.svg", "/_worker.js/_astro/shape_circle.CrKSEKq2.svg", "/_worker.js/_astro/shape_cone.3Z7deYeI.svg", "/_worker.js/_astro/shape_cross.DhoN_TDI.svg", "/_worker.js/_astro/shape_cube.D_YFeg5O.svg", "/_worker.js/_astro/shape_cylinder.BC7V-W-U.svg", "/_worker.js/_astro/shape_diamond.BUlEwwXq.svg", "/_worker.js/_astro/shape_disk.BFh1FhUu.svg", "/_worker.js/_astro/shape_egg.CItRDGR7.svg", "/_worker.js/_astro/shape_fireball.DLrw-dZq.svg", "/_worker.js/_astro/shape_flash.DSnMihLx.svg", "/_worker.js/_astro/shape_formation.dKx21m_I.svg", "/_worker.js/_astro/shape_light.BXE-AYpG.svg", "/_worker.js/_astro/shape_orb.D2T7_bOZ.svg", "/_worker.js/_astro/shape_oval.CPN9IEr7.svg", "/_worker.js/_astro/shape_rectangle.BkzKbeS_.svg", "/_worker.js/_astro/shape_sphere.B0IqZ72H.svg", "/_worker.js/_astro/shape_star.OPq-02VC.svg", "/_worker.js/_astro/shape_teardrop.DmLlYFoN.svg", "/_worker.js/_astro/shape_triangle.Yq7CqvGt.svg", "/_worker.js/_astro/shape_unknown.IlGMtcX3.svg", "/_worker.js/pages/_country_/_state_.astro.mjs", "/_worker.js/pages/api/getlocations.astro.mjs", "/_worker.js/pages/shapes/_shape_.astro.mjs", "/_worker.js/chunks/astro/server_jD9syGVz.mjs", "/_worker.js/pages/_country_/_state_/_city_.astro.mjs", "/api/getLocations", "/shapes/index.html", "/index.html"], "buildFormat": "directory", "checkOrigin": true, "serverIslandNameMap": [], "key": "NLfbbbRDMrzoxyxb1mCjNs0BE4kRSeFism4azx7LA/k=", "sessionConfig": { "driver": "cloudflare-kv-binding", "options": { "binding": "SESSION" } } });
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => Promise.resolve().then(() => (init_cloudflare_kv_binding_DMly_2Gl(), cloudflare_kv_binding_DMly_2Gl_exports));

// .wrangler/tmp/pages-aJ3rp1/bundledWorker-0.043739203584233666.mjs
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
// @__NO_SIDE_EFFECTS__
function createNotImplementedError2(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError2, "createNotImplementedError");
__name2(createNotImplementedError2, "createNotImplementedError");
// @__NO_SIDE_EFFECTS__
function notImplemented2(name) {
  const fn = /* @__PURE__ */ __name2(() => {
    throw /* @__PURE__ */ createNotImplementedError2(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
__name(notImplemented2, "notImplemented");
__name2(notImplemented2, "notImplemented");
// @__NO_SIDE_EFFECTS__
function notImplementedClass2(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
__name(notImplementedClass2, "notImplementedClass");
__name2(notImplementedClass2, "notImplementedClass");
var _timeOrigin2 = globalThis.performance?.timeOrigin ?? Date.now();
var _performanceNow2 = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin2;
var nodeTiming2 = {
  name: "node",
  entryType: "node",
  startTime: 0,
  duration: 0,
  nodeStart: 0,
  v8Start: 0,
  bootstrapComplete: 0,
  environment: 0,
  loopStart: 0,
  loopExit: 0,
  idleTime: 0,
  uvMetricsInfo: {
    loopCount: 0,
    events: 0,
    eventsWaiting: 0
  },
  detail: void 0,
  toJSON() {
    return this;
  }
};
var PerformanceEntry2 = class {
  static {
    __name(this, "PerformanceEntry");
  }
  static {
    __name2(this, "PerformanceEntry");
  }
  __unenv__ = true;
  detail;
  entryType = "event";
  name;
  startTime;
  constructor(name, options) {
    this.name = name;
    this.startTime = options?.startTime || _performanceNow2();
    this.detail = options?.detail;
  }
  get duration() {
    return _performanceNow2() - this.startTime;
  }
  toJSON() {
    return {
      name: this.name,
      entryType: this.entryType,
      startTime: this.startTime,
      duration: this.duration,
      detail: this.detail
    };
  }
};
var PerformanceMark3 = class PerformanceMark22 extends PerformanceEntry2 {
  static {
    __name(this, "PerformanceMark2");
  }
  static {
    __name2(this, "PerformanceMark");
  }
  entryType = "mark";
  constructor() {
    super(...arguments);
  }
  get duration() {
    return 0;
  }
};
var PerformanceMeasure2 = class extends PerformanceEntry2 {
  static {
    __name(this, "PerformanceMeasure");
  }
  static {
    __name2(this, "PerformanceMeasure");
  }
  entryType = "measure";
};
var PerformanceResourceTiming2 = class extends PerformanceEntry2 {
  static {
    __name(this, "PerformanceResourceTiming");
  }
  static {
    __name2(this, "PerformanceResourceTiming");
  }
  entryType = "resource";
  serverTiming = [];
  connectEnd = 0;
  connectStart = 0;
  decodedBodySize = 0;
  domainLookupEnd = 0;
  domainLookupStart = 0;
  encodedBodySize = 0;
  fetchStart = 0;
  initiatorType = "";
  name = "";
  nextHopProtocol = "";
  redirectEnd = 0;
  redirectStart = 0;
  requestStart = 0;
  responseEnd = 0;
  responseStart = 0;
  secureConnectionStart = 0;
  startTime = 0;
  transferSize = 0;
  workerStart = 0;
  responseStatus = 0;
};
var PerformanceObserverEntryList2 = class {
  static {
    __name(this, "PerformanceObserverEntryList");
  }
  static {
    __name2(this, "PerformanceObserverEntryList");
  }
  __unenv__ = true;
  getEntries() {
    return [];
  }
  getEntriesByName(_name, _type) {
    return [];
  }
  getEntriesByType(type) {
    return [];
  }
};
var Performance2 = class {
  static {
    __name(this, "Performance");
  }
  static {
    __name2(this, "Performance");
  }
  __unenv__ = true;
  timeOrigin = _timeOrigin2;
  eventCounts = /* @__PURE__ */ new Map();
  _entries = [];
  _resourceTimingBufferSize = 0;
  navigation = void 0;
  timing = void 0;
  timerify(_fn, _options) {
    throw /* @__PURE__ */ createNotImplementedError2("Performance.timerify");
  }
  get nodeTiming() {
    return nodeTiming2;
  }
  eventLoopUtilization() {
    return {};
  }
  markResourceTiming() {
    return new PerformanceResourceTiming2("");
  }
  onresourcetimingbufferfull = null;
  now() {
    if (this.timeOrigin === _timeOrigin2) {
      return _performanceNow2();
    }
    return Date.now() - this.timeOrigin;
  }
  clearMarks(markName) {
    this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
  }
  clearMeasures(measureName) {
    this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
  }
  clearResourceTimings() {
    this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
  }
  getEntries() {
    return this._entries;
  }
  getEntriesByName(name, type) {
    return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
  }
  getEntriesByType(type) {
    return this._entries.filter((e) => e.entryType === type);
  }
  mark(name, options) {
    const entry = new PerformanceMark3(name, options);
    this._entries.push(entry);
    return entry;
  }
  measure(measureName, startOrMeasureOptions, endMark) {
    let start;
    let end;
    if (typeof startOrMeasureOptions === "string") {
      start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
      end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
    } else {
      start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
      end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
    }
    const entry = new PerformanceMeasure2(measureName, {
      startTime: start,
      detail: {
        start,
        end
      }
    });
    this._entries.push(entry);
    return entry;
  }
  setResourceTimingBufferSize(maxSize) {
    this._resourceTimingBufferSize = maxSize;
  }
  addEventListener(type, listener, options) {
    throw /* @__PURE__ */ createNotImplementedError2("Performance.addEventListener");
  }
  removeEventListener(type, listener, options) {
    throw /* @__PURE__ */ createNotImplementedError2("Performance.removeEventListener");
  }
  dispatchEvent(event) {
    throw /* @__PURE__ */ createNotImplementedError2("Performance.dispatchEvent");
  }
  toJSON() {
    return this;
  }
};
var PerformanceObserver2 = class {
  static {
    __name(this, "PerformanceObserver");
  }
  static {
    __name2(this, "PerformanceObserver");
  }
  __unenv__ = true;
  static supportedEntryTypes = [];
  _callback = null;
  constructor(callback) {
    this._callback = callback;
  }
  takeRecords() {
    return [];
  }
  disconnect() {
    throw /* @__PURE__ */ createNotImplementedError2("PerformanceObserver.disconnect");
  }
  observe(options) {
    throw /* @__PURE__ */ createNotImplementedError2("PerformanceObserver.observe");
  }
  bind(fn) {
    return fn;
  }
  runInAsyncScope(fn, thisArg, ...args) {
    return fn.call(thisArg, ...args);
  }
  asyncId() {
    return 0;
  }
  triggerAsyncId() {
    return 0;
  }
  emitDestroy() {
    return this;
  }
};
var performance3 = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance2();
globalThis.performance = performance3;
globalThis.Performance = Performance2;
globalThis.PerformanceEntry = PerformanceEntry2;
globalThis.PerformanceMark = PerformanceMark3;
globalThis.PerformanceMeasure = PerformanceMeasure2;
globalThis.PerformanceObserver = PerformanceObserver2;
globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList2;
globalThis.PerformanceResourceTiming = PerformanceResourceTiming2;
var noop_default2 = Object.assign(() => {
}, { __unenv__: true });
var _console2 = globalThis.console;
var _ignoreErrors2 = true;
var _stderr2 = new Writable2();
var _stdout2 = new Writable2();
var log4 = _console2?.log ?? noop_default2;
var info4 = _console2?.info ?? log4;
var trace3 = _console2?.trace ?? info4;
var debug4 = _console2?.debug ?? log4;
var table3 = _console2?.table ?? log4;
var error4 = _console2?.error ?? log4;
var warn4 = _console2?.warn ?? error4;
var createTask3 = _console2?.createTask ?? /* @__PURE__ */ notImplemented2("console.createTask");
var clear3 = _console2?.clear ?? noop_default2;
var count3 = _console2?.count ?? noop_default2;
var countReset3 = _console2?.countReset ?? noop_default2;
var dir3 = _console2?.dir ?? noop_default2;
var dirxml3 = _console2?.dirxml ?? noop_default2;
var group3 = _console2?.group ?? noop_default2;
var groupEnd3 = _console2?.groupEnd ?? noop_default2;
var groupCollapsed3 = _console2?.groupCollapsed ?? noop_default2;
var profile3 = _console2?.profile ?? noop_default2;
var profileEnd3 = _console2?.profileEnd ?? noop_default2;
var time3 = _console2?.time ?? noop_default2;
var timeEnd3 = _console2?.timeEnd ?? noop_default2;
var timeLog3 = _console2?.timeLog ?? noop_default2;
var timeStamp3 = _console2?.timeStamp ?? noop_default2;
var Console2 = _console2?.Console ?? /* @__PURE__ */ notImplementedClass2("console.Console");
var _times2 = /* @__PURE__ */ new Map();
var _stdoutErrorHandler2 = noop_default2;
var _stderrErrorHandler2 = noop_default2;
var workerdConsole2 = globalThis["console"];
var {
  assert: assert3,
  clear: clear22,
  // @ts-expect-error undocumented public API
  context: context2,
  count: count22,
  countReset: countReset22,
  // @ts-expect-error undocumented public API
  createTask: createTask22,
  debug: debug22,
  dir: dir22,
  dirxml: dirxml22,
  error: error22,
  group: group22,
  groupCollapsed: groupCollapsed22,
  groupEnd: groupEnd22,
  info: info22,
  log: log22,
  profile: profile22,
  profileEnd: profileEnd22,
  table: table22,
  time: time22,
  timeEnd: timeEnd22,
  timeLog: timeLog22,
  timeStamp: timeStamp22,
  trace: trace22,
  warn: warn22
} = workerdConsole2;
Object.assign(workerdConsole2, {
  Console: Console2,
  _ignoreErrors: _ignoreErrors2,
  _stderr: _stderr2,
  _stderrErrorHandler: _stderrErrorHandler2,
  _stdout: _stdout2,
  _stdoutErrorHandler: _stdoutErrorHandler2,
  _times: _times2
});
var console_default2 = workerdConsole2;
globalThis.console = console_default2;
var hrtime4 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name2(/* @__PURE__ */ __name(function hrtime22(startTime) {
  const now = Date.now();
  const seconds = Math.trunc(now / 1e3);
  const nanos = now % 1e3 * 1e6;
  if (startTime) {
    let diffSeconds = seconds - startTime[0];
    let diffNanos = nanos - startTime[0];
    if (diffNanos < 0) {
      diffSeconds = diffSeconds - 1;
      diffNanos = 1e9 + diffNanos;
    }
    return [diffSeconds, diffNanos];
  }
  return [seconds, nanos];
}, "hrtime2"), "hrtime"), { bigint: /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function bigint2() {
  return BigInt(Date.now() * 1e6);
}, "bigint"), "bigint") });
var WriteStream2 = class {
  static {
    __name(this, "WriteStream");
  }
  static {
    __name2(this, "WriteStream");
  }
  fd;
  columns = 80;
  rows = 24;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  clearLine(dir32, callback) {
    callback && callback();
    return false;
  }
  clearScreenDown(callback) {
    callback && callback();
    return false;
  }
  cursorTo(x2, y3, callback) {
    callback && typeof callback === "function" && callback();
    return false;
  }
  moveCursor(dx, dy, callback) {
    callback && callback();
    return false;
  }
  getColorDepth(env22) {
    return 1;
  }
  hasColors(count32, env22) {
    return false;
  }
  getWindowSize() {
    return [this.columns, this.rows];
  }
  write(str, encoding, cb) {
    if (str instanceof Uint8Array) {
      str = new TextDecoder().decode(str);
    }
    try {
      console.log(str);
    } catch {
    }
    cb && typeof cb === "function" && cb();
    return false;
  }
};
var ReadStream2 = class {
  static {
    __name(this, "ReadStream");
  }
  static {
    __name2(this, "ReadStream");
  }
  fd;
  isRaw = false;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  setRawMode(mode) {
    this.isRaw = mode;
    return this;
  }
};
var Process2 = class _Process extends EventEmitter2 {
  static {
    __name(this, "_Process");
  }
  static {
    __name2(this, "Process");
  }
  env;
  hrtime;
  nextTick;
  constructor(impl) {
    super();
    this.env = impl.env;
    this.hrtime = impl.hrtime;
    this.nextTick = impl.nextTick;
    for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter2.prototype)]) {
      const value = this[prop];
      if (typeof value === "function") {
        this[prop] = value.bind(this);
      }
    }
  }
  emitWarning(warning, type, code) {
    console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
  }
  emit(...args) {
    return super.emit(...args);
  }
  listeners(eventName) {
    return super.listeners(eventName);
  }
  #stdin;
  #stdout;
  #stderr;
  get stdin() {
    return this.#stdin ??= new ReadStream2(0);
  }
  get stdout() {
    return this.#stdout ??= new WriteStream2(1);
  }
  get stderr() {
    return this.#stderr ??= new WriteStream2(2);
  }
  #cwd = "/";
  chdir(cwd22) {
    this.#cwd = cwd22;
  }
  cwd() {
    return this.#cwd;
  }
  arch = "";
  platform = "";
  argv = [];
  argv0 = "";
  execArgv = [];
  execPath = "";
  title = "";
  pid = 200;
  ppid = 100;
  get version() {
    return "";
  }
  get versions() {
    return {};
  }
  get allowedNodeEnvironmentFlags() {
    return /* @__PURE__ */ new Set();
  }
  get sourceMapsEnabled() {
    return false;
  }
  get debugPort() {
    return 0;
  }
  get throwDeprecation() {
    return false;
  }
  get traceDeprecation() {
    return false;
  }
  get features() {
    return {};
  }
  get release() {
    return {};
  }
  get connected() {
    return false;
  }
  get config() {
    return {};
  }
  get moduleLoadList() {
    return [];
  }
  constrainedMemory() {
    return 0;
  }
  availableMemory() {
    return 0;
  }
  uptime() {
    return 0;
  }
  resourceUsage() {
    return {};
  }
  ref() {
  }
  unref() {
  }
  umask() {
    throw /* @__PURE__ */ createNotImplementedError2("process.umask");
  }
  getBuiltinModule() {
    return void 0;
  }
  getActiveResourcesInfo() {
    throw /* @__PURE__ */ createNotImplementedError2("process.getActiveResourcesInfo");
  }
  exit() {
    throw /* @__PURE__ */ createNotImplementedError2("process.exit");
  }
  reallyExit() {
    throw /* @__PURE__ */ createNotImplementedError2("process.reallyExit");
  }
  kill() {
    throw /* @__PURE__ */ createNotImplementedError2("process.kill");
  }
  abort() {
    throw /* @__PURE__ */ createNotImplementedError2("process.abort");
  }
  dlopen() {
    throw /* @__PURE__ */ createNotImplementedError2("process.dlopen");
  }
  setSourceMapsEnabled() {
    throw /* @__PURE__ */ createNotImplementedError2("process.setSourceMapsEnabled");
  }
  loadEnvFile() {
    throw /* @__PURE__ */ createNotImplementedError2("process.loadEnvFile");
  }
  disconnect() {
    throw /* @__PURE__ */ createNotImplementedError2("process.disconnect");
  }
  cpuUsage() {
    throw /* @__PURE__ */ createNotImplementedError2("process.cpuUsage");
  }
  setUncaughtExceptionCaptureCallback() {
    throw /* @__PURE__ */ createNotImplementedError2("process.setUncaughtExceptionCaptureCallback");
  }
  hasUncaughtExceptionCaptureCallback() {
    throw /* @__PURE__ */ createNotImplementedError2("process.hasUncaughtExceptionCaptureCallback");
  }
  initgroups() {
    throw /* @__PURE__ */ createNotImplementedError2("process.initgroups");
  }
  openStdin() {
    throw /* @__PURE__ */ createNotImplementedError2("process.openStdin");
  }
  assert() {
    throw /* @__PURE__ */ createNotImplementedError2("process.assert");
  }
  binding() {
    throw /* @__PURE__ */ createNotImplementedError2("process.binding");
  }
  permission = { has: /* @__PURE__ */ notImplemented2("process.permission.has") };
  report = {
    directory: "",
    filename: "",
    signal: "SIGUSR2",
    compact: false,
    reportOnFatalError: false,
    reportOnSignal: false,
    reportOnUncaughtException: false,
    getReport: /* @__PURE__ */ notImplemented2("process.report.getReport"),
    writeReport: /* @__PURE__ */ notImplemented2("process.report.writeReport")
  };
  finalization = {
    register: /* @__PURE__ */ notImplemented2("process.finalization.register"),
    unregister: /* @__PURE__ */ notImplemented2("process.finalization.unregister"),
    registerBeforeExit: /* @__PURE__ */ notImplemented2("process.finalization.registerBeforeExit")
  };
  memoryUsage = Object.assign(() => ({
    arrayBuffers: 0,
    rss: 0,
    external: 0,
    heapTotal: 0,
    heapUsed: 0
  }), { rss: /* @__PURE__ */ __name2(() => 0, "rss") });
  mainModule = void 0;
  domain = void 0;
  send = void 0;
  exitCode = void 0;
  channel = void 0;
  getegid = void 0;
  geteuid = void 0;
  getgid = void 0;
  getgroups = void 0;
  getuid = void 0;
  setegid = void 0;
  seteuid = void 0;
  setgid = void 0;
  setgroups = void 0;
  setuid = void 0;
  _events = void 0;
  _eventsCount = void 0;
  _exiting = void 0;
  _maxListeners = void 0;
  _debugEnd = void 0;
  _debugProcess = void 0;
  _fatalException = void 0;
  _getActiveHandles = void 0;
  _getActiveRequests = void 0;
  _kill = void 0;
  _preload_modules = void 0;
  _rawDebug = void 0;
  _startProfilerIdleNotifier = void 0;
  _stopProfilerIdleNotifier = void 0;
  _tickCallback = void 0;
  _disconnect = void 0;
  _handleQueue = void 0;
  _pendingMessage = void 0;
  _channel = void 0;
  _send = void 0;
  _linkedBinding = void 0;
};
var globalProcess2 = globalThis["process"];
var getBuiltinModule2 = globalProcess2.getBuiltinModule;
var { exit: exit2, platform: platform2, nextTick: nextTick2 } = getBuiltinModule2(
  "node:process"
);
var unenvProcess2 = new Process2({
  env: globalProcess2.env,
  hrtime: hrtime4,
  nextTick: nextTick2
});
var {
  abort: abort2,
  addListener: addListener2,
  allowedNodeEnvironmentFlags: allowedNodeEnvironmentFlags2,
  hasUncaughtExceptionCaptureCallback: hasUncaughtExceptionCaptureCallback2,
  setUncaughtExceptionCaptureCallback: setUncaughtExceptionCaptureCallback2,
  loadEnvFile: loadEnvFile2,
  sourceMapsEnabled: sourceMapsEnabled2,
  arch: arch2,
  argv: argv2,
  argv0: argv02,
  chdir: chdir2,
  config: config2,
  connected: connected2,
  constrainedMemory: constrainedMemory2,
  availableMemory: availableMemory2,
  cpuUsage: cpuUsage2,
  cwd: cwd2,
  debugPort: debugPort2,
  dlopen: dlopen2,
  disconnect: disconnect2,
  emit: emit2,
  emitWarning: emitWarning2,
  env: env2,
  eventNames: eventNames2,
  execArgv: execArgv2,
  execPath: execPath2,
  finalization: finalization2,
  features: features2,
  getActiveResourcesInfo: getActiveResourcesInfo2,
  getMaxListeners: getMaxListeners2,
  hrtime: hrtime32,
  kill: kill2,
  listeners: listeners2,
  listenerCount: listenerCount2,
  memoryUsage: memoryUsage2,
  on: on2,
  off: off2,
  once: once2,
  pid: pid2,
  ppid: ppid2,
  prependListener: prependListener2,
  prependOnceListener: prependOnceListener2,
  rawListeners: rawListeners2,
  release: release2,
  removeAllListeners: removeAllListeners2,
  removeListener: removeListener2,
  report: report2,
  resourceUsage: resourceUsage2,
  setMaxListeners: setMaxListeners2,
  setSourceMapsEnabled: setSourceMapsEnabled2,
  stderr: stderr2,
  stdin: stdin2,
  stdout: stdout2,
  title: title2,
  throwDeprecation: throwDeprecation2,
  traceDeprecation: traceDeprecation2,
  umask: umask2,
  uptime: uptime2,
  version: version2,
  versions: versions2,
  domain: domain2,
  initgroups: initgroups2,
  moduleLoadList: moduleLoadList2,
  reallyExit: reallyExit2,
  openStdin: openStdin2,
  assert: assert22,
  binding: binding2,
  send: send2,
  exitCode: exitCode2,
  channel: channel2,
  getegid: getegid2,
  geteuid: geteuid2,
  getgid: getgid2,
  getgroups: getgroups2,
  getuid: getuid2,
  setegid: setegid2,
  seteuid: seteuid2,
  setgid: setgid2,
  setgroups: setgroups2,
  setuid: setuid2,
  permission: permission2,
  mainModule: mainModule2,
  _events: _events2,
  _eventsCount: _eventsCount2,
  _exiting: _exiting2,
  _maxListeners: _maxListeners2,
  _debugEnd: _debugEnd2,
  _debugProcess: _debugProcess2,
  _fatalException: _fatalException2,
  _getActiveHandles: _getActiveHandles2,
  _getActiveRequests: _getActiveRequests2,
  _kill: _kill2,
  _preload_modules: _preload_modules2,
  _rawDebug: _rawDebug2,
  _startProfilerIdleNotifier: _startProfilerIdleNotifier2,
  _stopProfilerIdleNotifier: _stopProfilerIdleNotifier2,
  _tickCallback: _tickCallback2,
  _disconnect: _disconnect2,
  _handleQueue: _handleQueue2,
  _pendingMessage: _pendingMessage2,
  _channel: _channel2,
  _send: _send2,
  _linkedBinding: _linkedBinding2
} = unenvProcess2;
var _process2 = {
  abort: abort2,
  addListener: addListener2,
  allowedNodeEnvironmentFlags: allowedNodeEnvironmentFlags2,
  hasUncaughtExceptionCaptureCallback: hasUncaughtExceptionCaptureCallback2,
  setUncaughtExceptionCaptureCallback: setUncaughtExceptionCaptureCallback2,
  loadEnvFile: loadEnvFile2,
  sourceMapsEnabled: sourceMapsEnabled2,
  arch: arch2,
  argv: argv2,
  argv0: argv02,
  chdir: chdir2,
  config: config2,
  connected: connected2,
  constrainedMemory: constrainedMemory2,
  availableMemory: availableMemory2,
  cpuUsage: cpuUsage2,
  cwd: cwd2,
  debugPort: debugPort2,
  dlopen: dlopen2,
  disconnect: disconnect2,
  emit: emit2,
  emitWarning: emitWarning2,
  env: env2,
  eventNames: eventNames2,
  execArgv: execArgv2,
  execPath: execPath2,
  exit: exit2,
  finalization: finalization2,
  features: features2,
  getBuiltinModule: getBuiltinModule2,
  getActiveResourcesInfo: getActiveResourcesInfo2,
  getMaxListeners: getMaxListeners2,
  hrtime: hrtime32,
  kill: kill2,
  listeners: listeners2,
  listenerCount: listenerCount2,
  memoryUsage: memoryUsage2,
  nextTick: nextTick2,
  on: on2,
  off: off2,
  once: once2,
  pid: pid2,
  platform: platform2,
  ppid: ppid2,
  prependListener: prependListener2,
  prependOnceListener: prependOnceListener2,
  rawListeners: rawListeners2,
  release: release2,
  removeAllListeners: removeAllListeners2,
  removeListener: removeListener2,
  report: report2,
  resourceUsage: resourceUsage2,
  setMaxListeners: setMaxListeners2,
  setSourceMapsEnabled: setSourceMapsEnabled2,
  stderr: stderr2,
  stdin: stdin2,
  stdout: stdout2,
  title: title2,
  throwDeprecation: throwDeprecation2,
  traceDeprecation: traceDeprecation2,
  umask: umask2,
  uptime: uptime2,
  version: version2,
  versions: versions2,
  // @ts-expect-error old API
  domain: domain2,
  initgroups: initgroups2,
  moduleLoadList: moduleLoadList2,
  reallyExit: reallyExit2,
  openStdin: openStdin2,
  assert: assert22,
  binding: binding2,
  send: send2,
  exitCode: exitCode2,
  channel: channel2,
  getegid: getegid2,
  geteuid: geteuid2,
  getgid: getgid2,
  getgroups: getgroups2,
  getuid: getuid2,
  setegid: setegid2,
  seteuid: seteuid2,
  setgid: setgid2,
  setgroups: setgroups2,
  setuid: setuid2,
  permission: permission2,
  mainModule: mainModule2,
  _events: _events2,
  _eventsCount: _eventsCount2,
  _exiting: _exiting2,
  _maxListeners: _maxListeners2,
  _debugEnd: _debugEnd2,
  _debugProcess: _debugProcess2,
  _fatalException: _fatalException2,
  _getActiveHandles: _getActiveHandles2,
  _getActiveRequests: _getActiveRequests2,
  _kill: _kill2,
  _preload_modules: _preload_modules2,
  _rawDebug: _rawDebug2,
  _startProfilerIdleNotifier: _startProfilerIdleNotifier2,
  _stopProfilerIdleNotifier: _stopProfilerIdleNotifier2,
  _tickCallback: _tickCallback2,
  _disconnect: _disconnect2,
  _handleQueue: _handleQueue2,
  _pendingMessage: _pendingMessage2,
  _channel: _channel2,
  _send: _send2,
  _linkedBinding: _linkedBinding2
};
var process_default2 = _process2;
globalThis.process = process_default2;
globalThis.process ??= {};
globalThis.process.env ??= {};
var serverIslandMap = /* @__PURE__ */ new Map();
var _page0 = /* @__PURE__ */ __name2(() => Promise.resolve().then(() => (init_getlocations_astro(), getlocations_astro_exports)), "_page0");
var _page1 = /* @__PURE__ */ __name2(() => Promise.resolve().then(() => (init_shape_astro(), shape_astro_exports)), "_page1");
var _page2 = /* @__PURE__ */ __name2(() => Promise.resolve().then(() => (init_shapes_astro(), shapes_astro_exports)), "_page2");
var _page3 = /* @__PURE__ */ __name2(() => Promise.resolve().then(() => (init_city_astro(), city_astro_exports)), "_page3");
var _page4 = /* @__PURE__ */ __name2(() => Promise.resolve().then(() => (init_state_astro(), state_astro_exports)), "_page4");
var _page5 = /* @__PURE__ */ __name2(() => Promise.resolve().then(() => (init_country_astro(), country_astro_exports)), "_page5");
var _page6 = /* @__PURE__ */ __name2(() => Promise.resolve().then(() => (init_index_astro(), index_astro_exports)), "_page6");
var pageMap = /* @__PURE__ */ new Map([
  ["src/pages/api/getLocations.ts", _page0],
  ["src/pages/shapes/[shape].astro", _page1],
  ["src/pages/shapes/index.astro", _page2],
  ["src/pages/[country]/[state]/[city]/index.astro", _page3],
  ["src/pages/[country]/[state]/index.astro", _page4],
  ["src/pages/[country]/index.astro", _page5],
  ["src/pages/index.astro", _page6]
]);
var _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: /* @__PURE__ */ __name2(() => Promise.resolve().then(() => (init_noop_actions(), noop_actions_exports)), "actions"),
  middleware: /* @__PURE__ */ __name2(() => Promise.resolve().then(() => (init_astro_internal_middleware(), astro_internal_middleware_exports)), "middleware")
});
var _args = void 0;
var _exports = createExports(_manifest);
var __astrojsSsrVirtualEntry = _exports.default;
var _start = "start";
if (_start in serverEntrypointModule) {
  serverEntrypointModule[_start](_manifest, _args);
}

// node_modules/wrangler/templates/pages-dev-util.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
__name(isRoutingRuleMatch, "isRoutingRuleMatch");
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}
__name(transformRoutingRuleToRegExp, "transformRoutingRuleToRegExp");

// .wrangler/tmp/pages-aJ3rp1/bmb0tnk8bku.js
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/",
    "/_astro/*",
    "/DrukWide-Heavy.woff",
    "/DrukWide-Heavy.woff2",
    "/DrukWide-HeavyItalic.woff",
    "/DrukWide-HeavyItalic.woff2",
    "/DrukWide-Medium.woff",
    "/DrukWide-Medium.woff2",
    "/PPSupplySans-Regular.woff",
    "/PPSupplySans-Regular.woff2",
    "/PPSupplySans-Ultralight.woff",
    "/PPSupplySans-Ultralight.woff2",
    "/favicon.svg",
    "/og_image.png",
    "/search-data.json",
    "/api/*",
    "/shapes/*",
    "/united-states/*",
    "/australia/*",
    "/united-kingdom/*",
    "/atlantic-ocean/*",
    "/india/*",
    "/mexico/*",
    "/argentina/*",
    "/bahamas/*",
    "/caribbean-sea/*",
    "/albania/*",
    "/thailand/*",
    "/afghanistan/*",
    "/pacific-ocean/*",
    "/aruba/*",
    "/armenia/*",
    "/algeria/*",
    "/hungary/*",
    "/south-africa/*",
    "/antigua-and-barbuda/*",
    "/antarctica/*",
    "/international-waters/*",
    "/iraq/*",
    "/norway/*",
    "/unknown/*",
    "/zimbabwe/*",
    "/vietnam/*",
    "/canada/*",
    "/brazil/*",
    "/ireland/*",
    "/germany/*",
    "/turkiye/*",
    "/spain/*",
    "/belgium/*",
    "/netherlands/*",
    "/italy/*",
    "/united-arab-emirates/*",
    "/iceland/*",
    "/iran/*",
    "/new-zealand/*",
    "/sweden/*",
    "/france/*",
    "/dominican-republic/*",
    "/bosnia-and-herzegovina/*",
    "/portugal/*",
    "/indonesia/*",
    "/czech-republic/*",
    "/peru/*",
    "/poland/*",
    "/ukraine/*",
    "/philippines/*",
    "/croatia/*",
    "/nepal/*",
    "/austria/*",
    "/israel/*",
    "/chile/*",
    "/japan/*",
    "/oman/*",
    "/venezuela/*",
    "/colombia/*",
    "/paraguay/*",
    "/russia/*",
    "/cyprus/*",
    "/egypt/*",
    "/honduras/*",
    "/bangladesh/*",
    "/guatemala/*",
    "/estonia/*",
    "/switzerland/*",
    "/lithuania/*",
    "/kazakhstan/*",
    "/morocco/*",
    "/china/*",
    "/mauritius/*",
    "/pakistan/*",
    "/saudi-arabia/*",
    "/northern-mariana-islands/*",
    "/south-korea/*",
    "/jamaica/*",
    "/us-virgin-islands/*",
    "/slovenia/*",
    "/ecuador/*",
    "/finland/*"
  ]
};
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env3, context3) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env3.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = __astrojsSsrVirtualEntry;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env3, context3);
      }
    }
    return env3.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env3, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env3);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env3, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env3);
  } catch (e) {
    const error5 = reduceError(e);
    return Response.json(error5, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-XLZcjn/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_dev_pipeline_default;

// node_modules/wrangler/templates/middleware/common.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env3, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env3, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env3, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env3, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-XLZcjn/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env3, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env3, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env3, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init2) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init2.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env3, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env3, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env3, ctx) => {
      this.env = env3;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init2) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init2.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default,
  pageMap
};
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
/*! https://mths.be/cssesc v3.0.0 by @mathias */
//# sourceMappingURL=bmb0tnk8bku.js.map
