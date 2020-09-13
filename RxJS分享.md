title: RxJS
speaker: xuhuan
plugins:
    - echarts

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/C1HhAQrbykQ/ .dark">

# RxJS {.text-landing.text-shadow}

:::footer

[徐桓](){.alignright}

:::

<slide class="bg-black-blue aligencenter" :class="size-40 aligncenter">

## 目录

---

- RxJS 简单介绍 {.animated.fadeInUp}

- RxJS 常用方法以及Subjet介绍 {.animated.fadeInUp.delay-400}

- Angular 中的RxJS {.animated.fadeInUp.delay-800}

- RxJS 常用技巧以及最佳实践 {.animated.fadeInUp.delay-1200}

- 问答 {.animated.feadInUp.delay-1600}

---

<slide :class="size-50">

## RxJS 是什么

<slide :class="size-50">

## Lodash for **async**

<slide :class="size-50">

> #### 用于 JavaScript 的 ReactiveX 库。
> RxJS 是使用 **Observables** 的响应式编程的库，它使编写异步或基于回调的代码更容易。
> ==RxJS中文文档==

<slide :class="size-50">

## RxJS 中的关键词

<slide :class="size-50">

## Observable

- 一个可观察的对象，可以被订阅，随着时间吐出数据

- 未被订阅前不会做任何操作

<slide :class="size-50">

## Operator

- 一个函数

- 对数据流中的元素做计算

<slide :class="size-50">

## Observer

- 观察者，一个对象

- 具有next、error、complete

- 用来订阅Observable

<slide :class="size-50">

## Subscription

- Observer 订阅 Observable 之后的返回值

- 用于取消订阅

<slide :class="size-50">

## Subject

- 一个既可以作为 Observable 对象，又可以作为 Observer 对象

- 具有Observable的所有方法

<slide :class="size-50">

## Operator

---

1. 组合
    concat、merge、zip...
2. 条件
    every、defaultIfEmpty

3. 创建
    Observable.create、of、from、interval、timer

4. 错误处理
    retry、retryWhen、catch

5. 多播
    share、multicast...

6. 过滤
    filter、debounce、throttle、take...

7. 转换
    map、mapTo、mergeMap、switchMap...

8. 工具
    tap、delay、toPromise...
{.build}
---

<slide :class="size-50 aligncenter">


## 多种Subject

<slide>

## Subject

:::flexblock
``` javascript
import { Subject } from 'rxjs';

const subject = new Subject<number>();

subject.asObservable().subscribe({
  next: res => console.log('A---->', res)
})

subject.next(0);

subject.asObservable().subscribe(
  res => console.log('B---->', res)
)

subject.next(1)
```
----

<pre>
A----> 0
A----> 1
B----> 1
</pre>

{.build}
<slide>

## BehaviorSubject

:::flexblock
``` javascript
import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject<number>(999);

subject.asObservable().subscribe({
  next: res => console.log('A---->', res)
})

subject.next(0);

subject.asObservable().subscribe(
  res => console.log('B---->', res)
)

subject.next(1)
```
----

<pre>
A----> 999
A----> 0
B----> 0
A----> 1
B----> 1
</pre>
{.build}
:::

<slide>

## ReplaySubject

:::flexblock
``` javascript
import { ReplaySubject } from 'rxjs';

const subject = new ReplaySubject<number>(2);

subject.asObservable().subscribe({
  next: res => console.log('A---->', res)
})

subject.next(0);
subject.next(1);
subject.next(2);

subject.asObservable().subscribe(
  res => console.log('B---->', res)
)

subject.next(3)
```
----

<pre>
A----> 0
A----> 1
A----> 2
B----> 1
B----> 2
A----> 3
B----> 3
</pre>
{.build}
:::

<slide>

## AsyncSubject

:::flexblock
``` javascript
import { AsyncSubject } from 'rxjs';

const subject = new AsyncSubject<number>();

subject.asObservable().subscribe({
  next: res => console.log('A---->', res)
})

subject.next(0);
subject.next(1);

subject.asObservable().subscribe(
  res => console.log('B---->', res)
)

subject.next(2)

subject.complete();
```
----

<pre>
A----> 2
B----> 2
</pre>
:::
{.build}

<slide :class="center-50">

## Angular 中的 RxJS

<slide :class="center-50 aligncenter">

---

- **HttpClient** {.animated.fadeInUp}

- **Router** {.animated.fadeInUp.delay-400}

- **ReactiveForm** {.animated.fadeInUp.delay-800}

- **EventEmiter** {.animated.fadeInUp.delay-1200}

---

<slide :class="center-50 aligncenter">

## RxJS 最佳实践

<slide>

### 取消订阅

``` javascript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'test';
  subscription: Subscription;

  ngOnInit() {
    this.subscription = interval(200).subscribe(res => {
      console.log(res);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}

```

<slide>

``` javascript
isDestroy = false;
destroy$ = new Subject();

ngOnInit() {
    interval(200).pipe(
        take(20),
        takeWhile(_ => this.isDestroy),
        takeUntil(this.destroy$),
    ).subscribe(res => {
        console.log(res);
    })
}

ngOnDestroy() {
    this.isDestroy = true;
    this.destroy$.next();
    this.destroy$.complete();
}
```
{.animated.fadeInUp}

<slide>

## 避免在 subscribe 函数中处理逻辑

:::flexblock

``` javascript
pokemon$.subscribe((pokemon: Pokemon) => {
  if (pokemon.type !== "Water") {
    return;
  }
  const pokemonStats = getStats(pokemon);
  logStats(pokemonStats);
  saveToPokedex(pokemonStats);
});
```

----

```javascript
pokemon$
  .pipe(
    filter(({ type }) => type === "Water"),
    map(pokemon => getStats(pokemon)),
    tap(stats => logStats(stats))
  )
  .subscribe(stats => saveToPokedex(stats));
```

<slide :class="aligncenter">

## 谢谢