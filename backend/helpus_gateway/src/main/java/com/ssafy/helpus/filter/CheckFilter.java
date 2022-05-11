package com.ssafy.helpus.filter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.Objects;

@Component
public class CheckFilter extends AbstractGatewayFilterFactory<CheckFilter.Config> {
    public static class Config{

    }
    public CheckFilter(){
        super(CheckFilter.Config.class);
    }
    @Override
    public GatewayFilter apply(CheckFilter.Config config) {
        return ((exchange, chain) -> {
            ServerHttpRequest req = exchange.getRequest();
            if(!req.getHeaders().containsKey("memberId") || !req.getHeaders().containsKey("memberIdByToken")){
                return onError(exchange, "키가 없음", HttpStatus.UNAUTHORIZED);
            }
            int memberId = Integer.parseInt(Objects.requireNonNull(req.getHeaders().get("memberId").get(0)));
            int memberIdByToken = Integer.parseInt(Objects.requireNonNull(req.getHeaders().get("memberIdByToken").get(0)));
            if(memberId != memberIdByToken)
                return onError(exchange,"본인이 아님", HttpStatus.UNAUTHORIZED);
            return chain.filter(exchange);

        });
    }
    private Mono<Void> onError(ServerWebExchange exchange, String e, HttpStatus status){
        ServerHttpResponse res = exchange.getResponse();
        res.setStatusCode(status);

        System.out.println(e);
        return res.setComplete();
    }

}
