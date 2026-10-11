package com.bookStore.config;

import com.bookStore.entity.Book;
import com.bookStore.entity.MyBookList;
import com.bookStore.repository.BookRepository;
import com.bookStore.repository.MyBookRepository;
import java.util.Comparator;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Profile("demo")
@ConditionalOnProperty(name = "app.demo.seed", havingValue = "true")
public class DemoDataInitializer implements ApplicationRunner {
    private static final Logger LOGGER = LoggerFactory.getLogger(DemoDataInitializer.class);
    private static final List<Sample> SAMPLES = List.of(
        new Sample("Notebook", "6", "1900", true),
        new Sample("Smartphone", "12", "180", true),
        new Sample("Monitor LED", "4", "3200", true),
        new Sample("Teclado", "8", "450", true),
        new Sample("Mouse", "10", "95", true),
        new Sample("Impressora", "2", "6500", false),
        new Sample("Cabos USB", "20", "35", true),
        new Sample("Bateria portatil", "5", "220", true),
        new Sample("Placa-mae", "3", "650", false),
        new Sample("Roteador", "4", "350", true),
        new Sample("Fone de ouvido", "7", "180", false),
        new Sample("Tablet", "3", "500", true)
    );
    private final BookRepository books;
    private final MyBookRepository collection;

    public DemoDataInitializer(BookRepository books, MyBookRepository collection) {
        this.books = books;
        this.collection = collection;
    }

    @Override
    @Transactional
    public void run(ApplicationArguments arguments) {
        int inserted = 0;
        int selected = 0;
        for (Sample sample : SAMPLES) {
            Book book = books.findByNameIgnoreCase(sample.name()).stream()
                .min(Comparator.comparingInt(Book::getId)).orElse(null);
            if (book == null) {
                book = books.save(new Book(0, sample.name(), sample.quantity(), sample.weight()));
                inserted++;
            }
            if (sample.selected() && !collection.existsById(book.getId())) {
                collection.save(new MyBookList(book.getId(), book.getName(), book.getAuthor(), book.getPrice()));
                selected++;
            }
        }
        LOGGER.info("Demonstracao: {} novos registros e {} novos itens na lista; dados existentes preservados.", inserted, selected);
    }

    private record Sample(String name, String quantity, String weight, boolean selected) {
    }
}
