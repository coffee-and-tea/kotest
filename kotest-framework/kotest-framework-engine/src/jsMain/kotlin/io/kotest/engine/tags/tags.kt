package io.kotest.engine.tags

import io.kotest.core.Tag
import kotlin.reflect.KClass

/**
 * Returns the tags specified on the given class from the @Tags annotation if present.
 */
actual fun KClass<*>.tags(): Set<Tag> = emptySet()
