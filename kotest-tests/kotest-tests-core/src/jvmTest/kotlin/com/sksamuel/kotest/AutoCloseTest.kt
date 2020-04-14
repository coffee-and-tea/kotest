package com.sksamuel.kotest

import io.kotest.core.spec.Spec
import io.kotest.core.spec.autoClose
import io.kotest.core.spec.style.StringSpec
import io.kotest.matchers.shouldBe
import java.util.concurrent.atomic.AtomicInteger


class AutoCloseTest : StringSpec() {

  private val first = autoClose(FirstAutoclose)
  private val second = autoClose(SecondAutoclose)
  private val third = autoClose(ThirdAutoclose)

  init {
    "should close resources in reverse order" {
       // Test will be verified in AfterSpec
    }
  }

   override fun afterSpec(spec: Spec) {
      first.closed shouldBe 3
      second.closed shouldBe 2
      third.closed shouldBe 1
   }

}

private val closedNumber = AtomicInteger(0)

private object FirstAutoclose : AutoCloseable {

   var closed = -1

   override fun close() {
      closed = closedNumber.incrementAndGet()
   }
}

private object SecondAutoclose : AutoCloseable {
   var closed = -1

   override fun close() {
      closed = closedNumber.incrementAndGet()
   }
}

private object ThirdAutoclose : AutoCloseable {
   var closed = -1

   override fun close() {
      closed = closedNumber.incrementAndGet()
   }
}
