package br.com.foodonhands.api.config;

import br.com.foodonhands.api.models.Role;
import br.com.foodonhands.api.models.User;
import br.com.foodonhands.api.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.findByEmail("admin@foodonhands.com").isEmpty()) {
            User admin = new User();
            admin.setNome("Admin");
            admin.setEmail("admin@foodonhands.com");
            admin.setPassword(passwordEncoder.encode("admin123"));
            admin.setRole(Role.ADMIN);
            
            userRepository.save(admin);
            System.out.println("Default ADMIN user created.");
        }
    }
}
